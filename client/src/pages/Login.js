import {useState} from 'react'

function Login () {
    const [user, setLogin] = useState({
        email:'',
        password:'',
        id:'',
    })

    const [errormsg, setErrormsg] = useState ()

    const handleOnChange = (e) => {
        setLogin({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const login = () => {
        fetch('http://localhost:8080/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                console.log(result);
                if(!result.success) {
                    setErrormsg("Wrong useremail/password combination!")
                }else{
                    console.log('login was successful!')
                console.log(result)
                setErrormsg()
                }
            })
    }

  return (
      <div>
          <label>User Email</label>
            <input name='user_email' type = 'text' placeholder = 'Enter User Email Here' onChange={handleOnChange}/>
          <label>Password</label>
            <input name = 'password' type = 'password' placeholder ='Enter Password' onChange={handleOnChange}/>
          <button onClick={login}>Login</button>
          {errormsg ? <p>{errormsg}</p> : ''}
      </div>
  )

}

export default Login