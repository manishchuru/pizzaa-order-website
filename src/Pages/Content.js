import React, { useState } from 'react';
import './Pages.css';

const Content = () => {
    const [fulldata,setFulldata] = useState({
        email:"",
        password:"",
        fname :"",
        lname:"",
        age:"",
        phonumber:""
    });
    const myfun= (e)=>{
     const name = e.target.name;
     const value = e.target.value ;
     setFulldata({...fulldata,[name]:value})
    }
   const  myfunction=(e)=>{
       e.preventDefault();
       console.log(fulldata);
   }
    return (
        <div className='fullform'>
         <form  className="form" onSubmit={myfunction}>
            <input type="email" placeholder='enter email'
            name ='email' onChange={myfun} value={fulldata.email} /> <br />
            <br />
            <input type="psd" placeholder='enter password'
            name ='password' onChange={myfun} value={fulldata.password} />  <br />
            <br />
            <input type="text" placeholder='enter fname'
            name ='fname' onChange={myfun} value={fulldata.fname} /> <br />
            <br />
            <input type="text" placeholder='enter lname'
            name ='lname' onChange={myfun} value={fulldata.lname} /> <br />
           <br />
            <input type="age" placeholder='enterage'
            name ='age' onChange={myfun} value={fulldata.age} /> <br />
            <br />
            <input type="num" placeholder='enter phone number '
            name ='phonumber' onChange={myfun} value={fulldata.phonumber} /> <br /> <br />
           <button type='submit' className='btn-danger sub' >submit </button>
            </form>
        </div>
    );
}

export default Content;
