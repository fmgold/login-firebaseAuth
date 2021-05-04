import { useState, useEffect } from 'react';
import './App.css'
import firebaseDb from './firebase'
import Login from './components/Login'
import Hero from './components/Hero'


function App() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)

  
  
  //function for login
  const handleLogin = () => {
    //clear error message
    setEmailError('')
    setPasswordError('')
    firebaseDb.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPassword(err.message)
            break;
        }
      })
  }

  //Function for sign up 
  const handleSignUp = () =>{
    setEmailError('')
    setPasswordError('')
    firebaseDb.auth().createUserWithEmailAndPassword(email,password)
      .catch(err=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)
            break;
          case "auth/weak-password" :
            setPassword(err.message)
            break;
            //default: err.message
        }
      })
  }
//logout
const handleLogout =()=>{
  firebaseDb.auth().signOut();
}

//auth listener
const authListener =()=>{
  firebaseDb.auth().onAuthStateChanged(user=>{
    if(user){
      //setEmail('')
      //setPassword('')
      setUser(user)
    }else{
      setUser('')
    }
  }
  )
}

useEffect(()=>{
  authListener() 
},[])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} user={user}/>
      ):
      (
        <Login
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        passwordError={passwordError}
        emailError={emailError}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
      />
      )}
      
      
    </div>
    
  );
}

export default App;
