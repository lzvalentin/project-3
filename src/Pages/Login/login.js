// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../../utils/AuthProvider';
// import React from 'react';
// import axios from '../../api/axios'
// const LOGIN_URL = '';


// const Login=()=> {
//     const { setAuth } = useContext(AuthContext)
//       const userRef = useRef();
//       const errRef = useRef();

//       const [user, setUser] = useState('');
//       const [pwd, setPwd] = useState('');
//       const [errMsg, setErrMsg] = useState('');
//       const [success, setSuccess] = useState(false);
      

//     useEffect(()=>{
//         userRef.current.focus();
//     },[])
//     useEffect(()=>{
//         setErrMsg('');
//     },[user, pwd])

//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         console.log(user, pwd)
//         try {
//             const response = await axios.post(LOGIN_URL,
//                 { email:user,password:pwd },
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
            
//             console.log(JSON.stringify(response?.data));
//             //console.log(JSON.stringify(response));
//             const accessToken = response?.data?.accessToken;
//             const roles = response?.data?.roles;
//             setAuth({ user, pwd, roles, accessToken });
//             setUser('');
//             setPwd('');
//             setSuccess(true);
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//         {success ? (
//             <section>
//                 <h1>Welcome to the neighborhood</h1>
//                 <br />
//                 <p>
//                     <a href="#">
//                         Go to Home
//                     </a>
//                 </p>
//             </section>
//         ) :(
//         <section>
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//             <h1>Log In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                     <input 
//                     type="text"
//                     id="email"
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e)=>setUser(e.target.value)}
//                     value={user}
//                     required></input>
//                 <label htmlFor="password">Password</label>
//                     <input 
//                     type="password"
//                     id="password"
//                     onChange={(e)=>setPwd(e.target.value)}
//                     value={pwd}
//                     required></input>
//                 <button>Log In</button>
//             </form>
//         </section>
//         )}
//         </>
//     )}
// export default Login;