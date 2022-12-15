import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Loader } from 'semantic-ui-react'
import { db, storage } from '../backend/firebase'
import { useParams, useNavigate } from 'react-router-dom'
import { setDoc, updateDoc } from 'firebase/firestore'
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  // uploadBytes,
  // listAll,
} from 'firebase/storage'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore'
// import { v4 } from "uuid";

const initialState = {
  name: '',
  Program: '',
  info: '',
  age: '',
  vote: 0,
  id: '',
}

const AddEditUser = () => {
  const [data, setData] = useState(initialState)
  const { name, program, info, age } = data
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [imageUrls, setImageUrls] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  // Update candidateprofile
  useEffect(() => {
    id && getSingleUser()
  }, [id])

  const getSingleUser = async () => {
    const docRef = doc(db, 'candidateprofile', id)
    const snapshot = await getDoc(docRef)
    if (snapshot.exists()) {
      setData({ ...snapshot.data() })
    }
  }
  //This section is to upload image from firebase storage
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgress(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is Pause')
              break
            case 'running':
              console.log('Upload is Running')
              break
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          })
        },
      )
    }
    file && uploadFile()
  }, [file])

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name
      console.log(name)
      const storageRef = ref(storage, file.name)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        },
      )
    }
  })

  // const imagesListRef = ref(storage, "images/");
  // const uploadImage = () => {
  // 	if (file == null) return;
  // 	const imageRef = ref(storage, `images/${file.name + v4()}`);
  // 	uploadBytes(imageRef, file).then((snapshot) => {
  // 		getDownloadURL(snapshot.ref).then((url) => {
  // 			setImageUrls((prev) => [...prev, url]);
  // 		});
  // 	});
  // };

  // useEffect(() => {
  // 	listAll(imagesListRef).then((response) => {
  // 		response.items.forEach((item) => {
  // 			getDownloadURL(item).then((url) => {
  // 				setImageUrls((prev) => [...prev, url]);
  // 			});
  // 		});
  // 	});
  // }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // Setting up a schema for our data
  const validate = () => {
    let errors = {}
    if (!name) {
      errors.name = 'Name is Required'
    }
    if (!program) {
      errors.program = 'Program is Required'
    }
    if (!info) {
      errors.name = 'Info is Required'
    }
    if (!age) {
      errors.age = 'Age is Required'
    }
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let errors = validate()
    if (Object.keys(errors).length) return setErrors(errors)
    setIsSubmit(true)
    if (!id) {
      try {
        const docCreated = await addDoc(collection(db, 'candidateprofile'), {
          ...data,
          timestamp: serverTimestamp(),
        })
        await setDoc(doc(db, 'candidateprofile', docCreated.id), {
          ...data,
          id: docCreated.id,
        })
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await updateDoc(doc(db, 'candidateprofile'), {
          ...data,
          timestamp: serverTimestamp(),
        })
      } catch (error) {
        console.log(error)
      }
    }
    navigate('/votingpage')
  }
  return (
    <div className="m-5">
      <Grid
        centered
        verticalAlign="middle"
        columns={3}
        style={{ height: '80vh', width: '200vh' }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? (
                <Loader active inline="centered" size="huge" />
              ) : (
                <>
                  <h2> {id ? 'Update User' : 'Add User'}</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Input
                      label="Name"
                      error={errors.name ? { content: errors.name } : null}
                      placeholder="Enter Name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      autoFocus
                    />
                    <Form.Input
                      label="Program"
                      error={
                        errors.program ? { content: errors.program } : null
                      }
                      placeholder="Enter program"
                      name="program"
                      onChange={handleChange}
                      value={program}
                    />
                    <Form.TextArea
                      label="Info"
                      error={errors.info ? { content: errors.info } : null}
                      placeholder="Enter Info"
                      name="info"
                      onChange={handleChange}
                      value={info}
                    />
                    <Form.Input
                      label="Age"
                      error={errors.age ? { content: errors.age } : null}
                      placeholder="Enter Age"
                      name="age"
                      onChange={handleChange}
                      value={age}
                    />
                    <Form.Input
                      label="Upload"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Button
                      primary
                      type="submit"
                      disabled={program !== null && program < 100}
                      // onClick={uploadImage}
                    >
                      Submit
                    </Button>
                    {/* {imageUrls.map((url) => {
											return <img src={url} alt="ima" />;
										})} */}
                  </Form>
                </>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default AddEditUser
