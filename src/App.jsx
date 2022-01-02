import React from 'react'
import { Switch, Route } from "react-router-dom"

import RegisterForm from './Screens/Register/RegisterForm'
import CheckInForm from './Screens/Checkin/CheckInForm'
import QrPage from './Screens/QRPage/QrPage'

import "./App.scss"
import 'react-phone-number-input/style.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <div className='app_container'>
                <Switch>
                    <Route exact path="/" component={RegisterForm} />
                    <Route path="/checkin" component={CheckInForm} />
                    <Route path="/qr" component={QrPage} />
                </Switch>
            </div>
        </>
    )
}

export default App
