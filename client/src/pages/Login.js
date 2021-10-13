import {useState} from 'react'
import {connect} from 'react-redux'


function Login (props) {
    const [user, setLogin] = useState({
        email:'',
        firstName:'',
        password:'',
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
                if(result.success == true) {
                    const token = result.token
                    localStorage.setItem('jsonwebtoken', token)
                    localStorage.setItem('firstName', result.user.first_name)
                    props.onLogin()
                    props.history.push('/MyEventures')
                    console.log("login was successful!")
                }else{
                    setErrormsg('Worng user email or password')
                }
            })
    }

  return (
      <div>
          <label>User Email</label>
            <input name='email' type = 'text' placeholder = 'Enter User Email Here' onChange={handleOnChange}/>
          <label>Password</label>
            <input name = 'password' type = 'password' placeholder ='Enter Password' onChange={handleOnChange}/>
          <button onClick={login}>Login</button>
          {errormsg ? <p>{errormsg}</p> : ''}
      </div>
  )

}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: () => dispatch ({type:'ON_LOGIN'})

    }
}

const mapStateToProps = (state) => {
    return {
        ON_LOGIN: state.firstName
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)