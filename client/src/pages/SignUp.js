import {useState} from 'react'
import {Container} from 'react-bootstrap'
import '../pages/styles/SignUp.css'



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
        fetch('https://eventures-app.herokuapp.com/api/register', {
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
        <Container fluid>
            <body className='signupBody'>
                <div className='inputDiv'>
                    <h1 className='signUpheader'>Sign up, your next eVenture awaits!</h1>
                    <label className = 'signuplabel'>First Name</label>
                    <input name='firstName' type='text' placeholder='Enter first name' onChange={handleOnChange} />
                    <br></br>
                    <label className = 'signuplabel'>Last Name</label>
                    <input name='lastName' type='text' placeholder='Enter last name' onChange={handleOnChange} />
                    <br></br>
                    <label className = 'signuplabel'>Email</label>
                    <input name='email' type='text' placeholder='Enter email' onChange={handleOnChange} />
                    <br></br>
                    <label className = 'signuplabel'>Password</label>
                    <input name='password' type='password' placeholder='Enter first password' onChange={handleOnChange} />
                    <br></br>
                    <br></br>
                    <button onClick={signUp}>Sign Me Up!</button>{' '}
                    {errormsg ? <p>{errormsg}</p> : ''}
                </div>
            </body>
        </Container>
    )


    }

 
    
export default (SignUp)