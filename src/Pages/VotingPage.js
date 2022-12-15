import React, { useEffect, useState } from 'react'
import { db } from '../backend/firebase'
import { Button, Card, Grid, Container, Image } from 'semantic-ui-react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  getDoc,
  setDoc,
  // serverTimestamp,
} from 'firebase/firestore'

import ModalComp from '../components/ModalComp'

const VotingPage = () => {
  const [candidateprofile, setCandidateProfile] = useState([])
  const [open, setOpen] = useState(false)
  const [candidate, setCandidate] = useState({})
  const [loading, setLoading] = useState(false)
  // const [vote, setVote] = useState(0);
  const [currentUser, setCurrentUser] = useState()
  const isAuth = localStorage.getItem('isAuth')

  const navigate = useNavigate()

  useEffect(() => {
    const userCollection = doc(db, 'users', isAuth)
    const getCurrentUser = async () => {
      const user = await getDoc(userCollection)
      console.log('current user: ', user.data())
      setCurrentUser(user.data())
    }
    getCurrentUser()
  }, [isAuth])

  console.log('current user state: ', currentUser)
  useEffect(() => {
    console.log('auth info: ', isAuth)
    setLoading(true)
    const unsub = onSnapshot(
      collection(db, 'candidateprofile'),
      (snapshot) => {
        let list = []
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setCandidateProfile(list)
        setLoading(false)
      },
      (error) => {
        console.log(error)
      },
    )
    return () => {
      unsub()
    }
  }, [isAuth])

  const handleModal = (item) => {
    setOpen(true)
    setCandidate(item)
  }
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this user ?')) {
      try {
        setOpen(false)
        await deleteDoc(doc(db, 'candidateprofile', id))
        setCandidateProfile(
          candidateprofile.filter((candidate) => candidate.id !== id),
        )
      } catch (err) {
        console.log(err)
      }
    }
  }

  const VoteButtons = async (candidate) => {
    let newCandidate = { ...candidate, vote: candidate.vote + 1 }
    // Do calculation to save the vote.
    //   const post =
    //   await db.collection("candidateprofile").doc().set({
    // 	name: candidate.name,
    // 	vote: vote,
    // 	createdAt: serverTimestamp,

    //   });
	console.log('candidate voted for: ',candidate)
	await setDoc(doc(db,'candidateprofile',candidate.id),newCandidate)
    let newUser = { ...currentUser, hasVoted: true }
    const userCollection = doc(db, 'users', isAuth)
    await setDoc(userCollection, newUser)
    setCurrentUser(newUser)
    console.log('new User: ', currentUser)
  }

  return (
    <Container>
      <Grid className=" fluid card four column row my-5" stackable>
        {candidateprofile &&
          candidateprofile.map((item) => (
            <Grid.Column key={item.id}>
              <Card key={item.id}>
                <Card.Content>
                  <Image className= "ms-4"
                    src={item.img}
                    size="large"
                    style={{
                      height: '150px',
                      width: '150px',
                      borderRadius: '50%',
                      alignItems:"center"
                    }}
                  />
                  <Card.Header  className= "ms-4" style={{ marginTop: '5px' }}>
                    {item.name}
                  </Card.Header>
				  <Card.Content className= "ms-5 ps-3" style={{ marginTop: '5px' }}>age: 
                    {item.age}
                  </Card.Content>
                 
                  <Card.Description  className= "ms-5 ps-3"> {item.info}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='row'>
                    {currentUser.isAdmin && (
                      <>
                        <Button
                          color="green"
                          onClick={() => navigate(`/update/${item.id}`)}
                        >
                          Update
                        </Button>
                        <Button className='my-3 col'
                          color="purple"
                          onClick={() => handleModal(item)}
                        >
                          View
                        </Button>
                      </>
                    )}
                    {open && (
                      <ModalComp
                        open={open}
                        setOpen={setOpen}
                        handleDelete={handleDelete}
                        {...candidate}
                      />
                    )}
                    <div className="content">
                      <button
                        onClick={() => VoteButtons(item)}
                        color="red"
                        className="upvote"
                        disabled={currentUser.hasVoted}
                      >
                        Vote
                      </button>
					  {currentUser.hasVoted && (
                    <div>
                      <p>
                        {item.vote} vote{item.vote > 1 && 's'}
                      </p>
                    </div>
                  )}

                      <span className="vote"></span>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  )
}

export default VotingPage
