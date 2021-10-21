import {useState} from 'react'
import {Container, Form, Button, Image} from 'react-bootstrap'
import Cooking from './styles/images/cooking.jpg'
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
        <Container fluid>
                <div className='signupHeaderDiv'>
                    <label className='signUpheader'>Sign up, your next eVenture awaits!</label>
                </div>
                <div className = 'signupImage'>
                    <Image className='loginImage' src={Cooking} rounded/>
                </div>  
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label className = 'signuplabel'>First Name</Form.Label>
                                <Form.Control className='signupInput' name='firstName' type='text' placeholder='Enter first name' onChange={handleOnChange} />
                                <Form.Label className = 'signuplabel'>Last Name</Form.Label>
                                <Form.Control className='signupInput' name='lastName' type='text' placeholder='Enter last name' onChange={handleOnChange} />
                                <Form.Label className = 'signuplabel'>Email</Form.Label>
                                <Form.Control  className='signupInput' name='email' type='text' placeholder='Enter email' onChange={handleOnChange} />
                                <Form.Label className = 'signuplabel'>Password</Form.Label>
                                <Form.Control className='signupInput' name='password' type='password' placeholder='Enter first password' onChange={handleOnChange} />
                             <Button variant='primary' className='signupBtn' onClick={signUp}>Sign Me Up!</Button>{' '}
                            {errormsg ? <p>{errormsg}</p> : ''}
                            </Form.Group>
                         </Form>
               
            
        </Container>
    )


    }

 
    
export default (SignUp)