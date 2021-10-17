import { useState } from 'react'
import { connect } from 'react-redux'
import {Container, Card} from 'react-bootstrap'
import SnowLake from './styles/images/snowLake.jpg'
import ZCooking from './styles/images/zCooking.jpg'
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
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                console.log(result);
                if (result.success == true) {
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

        fetch('http://localhost:8080/api/login', {
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
                    props.onLogin()
                    props.history.push('/my-eventures')
                    console.log("login was successful!")
                } else {
                    setErrormsg('Worng user email or password')
                }
            })
    }


    return (
        <Container className='loginDiv'fluid>
            <div className='inputDiv'>
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Img variant="top" src={SnowLake} />
                    <Card.Body>
                        <Card.Text className='loginText'>
                            <label className='loginLabel'>User Email</label>
                            <br></br>
                            <input name='email' type='text' placeholder='Enter User Email Here' onChange={handleOnChange} />
                            <br></br>
                            <br></br>
                            <label className='loginLabel'>Password</label>
                            <br></br>
                            <input name='password' type='password' placeholder='Enter Password' onChange={handleOnChange} />
                            <br></br>
                            <br></br>
                            <div className='loginbuttondiv'>
                            <button className ='loginBtn'onClick={login}>Login</button>
                             {errormsg?<p>{errormsg}</p>: ''}
                             <br></br>
                            <button className ='loginBtn'onClick={handleLoginAsGuest}>Login as Guest</button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
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