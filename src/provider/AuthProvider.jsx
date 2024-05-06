import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import auth from '../firebase/firbase.config'
import { useLocation } from 'react-router-dom'

// exporting context globally
export const AuthContext = createContext(null)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  //   const { displayName } = user
  //   //  setting user profile and photoUrl
  //   const [name, setName] = useState(null)
  //   setName(displayName)

  //   const [photo, setPhoto] = useState(null)
  //   setPhoto(user.photoUrl)

  //   const [mail, setMail] = useState(null)
  //   setMail(user.email)

  //   const [metadata, setMetaData] = useState(null)
  //   setMetaData(user.metadata)

  // signup
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login
  const signinUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // signin - Google
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleAuthProvider)
  }

  // signin - Github
  const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubAuthProvider)
  }

  // Log Out
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // passing the value by authInfo inside AuthContext
  const authInfo = {
    user,
    createUser,
    signinUser,
    loading,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    // name,
    // photo,
    // metadata,
    // mail,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log('Current value of the curruent user :', currentUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.node,
}
