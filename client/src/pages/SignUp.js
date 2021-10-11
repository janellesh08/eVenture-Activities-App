import {useState} from 'react'


function SignUp(props) {
    const [user, setUser] = useState ({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const [errormsg, setErrormsg] = useState()

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const signUp = () => {
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => {
            console.log('response', response);
            if (!response.ok) {
                setErrormsg('Email is already in use')
            } else {
                console.log('Sign Up Successful!')
                props.history.push('/login')
                setErrormsg()
            }
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <label>First Name</label>
                <input name = 'firstName' type = 'text' placeholder = 'Enter first name'onChange = {handleOnChange}/>
            <label>Last Name</label>
                <input name = 'lastName' type = 'text' placeholder = 'Enter last name'onChange = {handleOnChange}/>
            <label>Email</label>
                <input name = 'email' type = 'text' placeholder = 'Enter email'onChange = {handleOnChange}/>
            <label>Password</label>
                <input name = 'password' type = 'password' placeholder = 'Enter first password' onChange = {handleOnChange}/>
            <button onClick={signUp}>Sign Me Up!</button>
            {errormsg ? <p>{errormsg}</p> : ''}

        </div>
    )


    }
    
export default SignUp