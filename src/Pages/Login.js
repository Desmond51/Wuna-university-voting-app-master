import React from 'react'
import { auth, db, provider } from '../backend/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc, addDoc, getDoc } from 'firebase/firestore'

function Login({ setIsAuth }) {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      
      navigate('/votingpage')
      console.log('result 2 after sign in', result)
      const userCollection = doc(db, 'users', result.user.uid)
	  setIsAuth(result.user.uid)
	  localStorage.setItem('isAuth', result.user.uid)
      let firebaseUser
      try {
        firebaseUser = await getDoc(userCollection)
      } catch (error) {
        console.log('error getting firebase user: ', error)
      }
      if (firebaseUser.exists()) {
        console.log('user already exists: ', firebaseUser.data())
      } else {
        setDoc(userCollection, {
          username: result.user.displayName,
          email: result.user.email,
          id: result.user.uid,
          hasVoted: false,
        })
          .then((user) => {
            console.log('user created: ', user)
          })
          .catch((error) => console.log('Error creating user: ', error))
      }
    })
  }

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
