import React from 'react'
import { useHistory } from "react-router-dom"
import QR from "qrcode.react"

import Back from "../../assets/registration.jpeg"

import "./QrPage.scss"

const QrPage = () => {
    let history = useHistory()

    let id = new URLSearchParams(history.location.search).get("id")

    return (
        <>
            <div className="qr_container">
                <div className="header">
                    <img src={Back} alt="ERROR" />
                    <p> Vielen Dank für Ihre Anmeldung</p>
                </div>
                <div className="qr_box">
                    <div className="qr">
                        <QR value={`${id}`} />
                        <div> Testnummer : {id} </div>
                        <p> Sie wurden Erfolgreich registriert </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QrPage
