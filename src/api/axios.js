 import axios from 'axios';
 
 export default axios.create({
    baseURL: 'http://localhost:3000/users/login'
 });
//  const makeAPICall = async () => {
//    try {
//      const response = await fetch('http://localhost:8080/', {mode:'cors'});
//      const data = await response.json();
//      console.log({ data })
//    }
//    catch (e) {
//      console.log(e)
//    }
//  }
//  useEffect(() => {
//    makeAPICall();
//  }, [])