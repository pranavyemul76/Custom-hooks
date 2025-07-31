import React,{useState,useEffect, HTMLAttributeAnchorTarget} from 'react'

export default function App() {
   const [ userData, setUserData]= useState({name:"", email:"",phone:""})
   userData.name.length
  const  validateUser=()=>{
        if(userData.phone.length<9 && userData.phone.length>10)
        {
            return false;
        } 
      return true;
  }
    const handleInput=(e)=>
        {
             const {name,value} = e.target;
            setUserData({[name]:value});
        }
    const handleSubmit =(e:HTMLAttributeAnchorTarget)=>{
       e.preve
     
       if(validateUser()===false){
      alert("Form Invalid");
       }
    }
    
  return <>
      <h1>"Hello"</h1>
      <form onSubmit= { (e) => handleSubmit(e) }>
      
      <input type='text'  name="name" value={userData.name} onChange={handleInput} />
      <input type="email" name="email"  value={userData.email} onChange={handleInput}/>
      <input type="text" name="phone" value={userData.phone} onChange={handleInput} />
          <input type='submit' />
   </form>
  </>
}
