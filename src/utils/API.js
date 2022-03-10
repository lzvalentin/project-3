const BASEURL="http://localhost:3000"
// const BASEURL=""

const API = {
    getTokenData: (token)=>{
        return fetch(`${BASEURL}/api/users`, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
            .then(res => res.json())
    },
    login: (email,password)=>{
       return fetch(`${BASEURL}/api/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password:password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
    },
    getUsers:()=>{
        return fetch(`${BASEURL}/api/users`)
        .then(res => res.json())
    },
    getSingleUser:id=>{
        return  fetch(`${BASEURL}/api/users/${id}`).then(res=>res.json())
    }
}

export default API;