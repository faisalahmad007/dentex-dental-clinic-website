import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const googleProvider = new GoogleAuthProvider();

    const[user,setUser] = useState({});
    const[error,setError] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[isLogin,setIsLogin] = useState(false);

    const auth = getAuth();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
   }
   const handlePasswordChange = (event) => {
       setPassword(event.target.value);
  }
   const handleRegistration = (event) => {
    event.preventDefault();
    if(password.length <6){
        setError('Password Must Be at least 6 characters');
        return;
    }
    if(!/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(password)){
           setError('Password must contain upper case');
           return;
    }
    
    isLogin? processLogin(email,password) : createNewUser(email,password);
       

   }
   const processLogin = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    
    const user = result.user;
    setError('');
  })
  .catch((error) => {
    
    setError(error.message);
  });

   }

   const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
        setError('');
        verifyEmail();
    })
    .catch((error) => {
       
       setError(error.message);
 
      });
   }
   const verifyEmail = () => {
       sendEmailVerification(auth.currentUser)
       .then(result =>{
           console.log(result);
       })

   }
    
    const signInUsingGoogle=()=>{
        
        signInWithPopup(auth , googleProvider)
            .then(result =>{
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error=>{
                setError(error.message);
            })
    }
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
               setUser(user);
            }
            else{
                setUser("");
            }
          return ()=> unsubscribed; 
        }
    )} , [])
    const logOut = ()=>{
        signOut(auth).then(() => {
            setUser({});
          })
    }

    return {
       user,
       signInUsingGoogle,
       handleRegistration,
       createNewUser,
       processLogin,
       handleEmailChange,
       handlePasswordChange,
       logOut,
       error,
    }

 }
 export default useFirebase;