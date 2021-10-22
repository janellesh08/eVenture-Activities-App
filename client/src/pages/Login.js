import { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Image, Button, Form } from 'react-bootstrap'
import SnowLake from './styles/images/snowLake.jpg'
import '../pages/styles/login.css'


function Login(props) {
    const [user, setLogin] = useState({
        email: '',
        firstName: '',
        password: '',
    })

    const [errormsg, setErrormsg] = useState()

    const handleOnChange = (e) => {
        setLogin({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {
        fetch('https://eventures-app.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                console.log(result);
                if (result.success === true) {
                    const token = result.token
                    localStorage.setItem('jsonwebtoken', token)
                    localStorage.setItem('firstName', result.user.first_name)
                    localStorage.setItem('userId', result.user.id)
                    props.onLogin()
                    props.history.push('/my-eventures')
                    console.log("login was successful!")
                } else {
                    setErrormsg('Wrong user email or password')
                }
            })
    }

    const handleLoginAsGuest = () => {
        const body = { email: 'guest@guest.com', password: 'adminPassword' }

        fetch('https://eventures-app.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    const token = result.token
                    localStorage.setItem('jsonwebtoken', token)
                    localStorage.setItem('firstName', result.user.first_name)
                    localStorage.setItem('userId', result.user.id)
                    props.onLogin()
                    props.history.push('/my-eventures')
                    console.log("login was successful!")
                } else {
                    setErrormsg('Worng user email or password')
                }
            })
    }


    return (
    
        <>
            <Container fluid >
                <div className='headerDiv'>
                <label className='loginheader'>Login</label>
                </div>
                <div className='loginImageDiv'>
                <Image className='loginImage' src={SnowLake} rounded/>
                </div>
                     <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='loginLabel'>User Email</Form.Label>
                                 <br></br>
                            <Form.Control name='email' className = 'emailInput'type='text' placeholder='Enter User Email Here' onChange={handleOnChange} />
                                <br></br>
                                <br></br>
                            <Form.Label className='loginLabel'>Password</Form.Label>
                                <br></br>
                            <Form.Control name='password' className = 'emailInput' type='password' placeholder='Enter Password' onChange={handleOnChange} />
                                <br></br>
                                <br></br>
                            <div className='loginbuttondiv'>
                                 <Button variant='primary' className='loginBtn' onClick={login}>Login</Button>
                                {errormsg ? <p>{errormsg}</p> : ''}
                                <br></br>
                                <Button variant='primary' className='loginBtn' onClick={handleLoginAsGuest}>Login as Guest</Button>
                            </div>
                        </Form.Group>
                    </Form>
                    </Container>
        </>
    
    )


}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({ type: 'ON_LOGIN' })

    }
}

const mapStateToProps = (state) => {
    return {
        ON_LOGIN: state.firstName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)