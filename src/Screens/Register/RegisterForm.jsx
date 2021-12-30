import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import TextField from "@mui/material/TextField/TextField"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button/Button";

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import PhoneInput from 'react-phone-number-input'

import Back from "../../assets/registration.jpeg"

import { register } from "../../api/form"

import "./RegisterForm.scss"

const RegisterForm = () => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        name: "",
        full_name: "",

        first_name: "",
        last_name: "",
        email: "",
        id_number: "",
        street: "",
        street_number: "",
        zip_code: '',
        towncity: "",
        report_preference: "",
        test_name: "",

        date_of_birth: '',
        phone_number: "",

        create_lab_test: "1",
        appointment: null,
        active_subscription: 'Active'

    })

    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState("")

    const enteringSelect = (event) => {
        let { name, value } = event.target
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    };
    const enteringData = (event) => {
        let { name, value } = event.target

        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const enteringDate = (value) => {
        let createTime = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
        setEnteredData((preValue) => {
            return {
                ...preValue,
                date_of_birth: createTime
            }
        })
        setDate(value)
    }
    const enteringNumber = (value) => {
        setEnteredData((preValue) => {
            return {
                ...preValue,
                phone_number: value
            }
        })
    }

    const go = async () => {
        let res = await register(enteredData)
        if (res.error != null) {
            alert("error")
        }
    }


    return (
        <>
            <div className="registerform_container">
                <div className="header">
                    <img src={Back} alt="ERROR" />
                    <p> Anmeldung </p>
                </div>

                <div className="backcolor">
                    <div className="form">
                        <div className="title">
                            ANMELDUNG FORM
                        </div>
                        <div className="one">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Standort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={enteredData.towncity}
                                    label="Standort"
                                    onChange={enteringSelect}
                                    name='towncity'
                                >
                                    <MenuItem value={"Am Marktplatz - Pinneberg"}>Am Marktplatz - Pinneberg</MenuItem>
                                    <MenuItem value={"Westring - Pinneberg"}>Westring - Pinneberg</MenuItem>
                                    <MenuItem value={"Quellental - Pinneberg"}>Quellental - Pinneberg</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="group">
                            <TextField onChange={enteringData} value={enteredData.first_name} name='first_name' className="input" variant="outlined" label="Vorname" />
                            <TextField onChange={enteringData} value={enteredData.last_name} name='last_name' className="input" variant="outlined" label="Nachname" />
                        </div>
                        <div className="group">
                            <PhoneInput placeholder='Handynummer' className='phone_input' value={enteredData.phone_number} onChange={enteringNumber} defaultCountry='DE' />
                            <TextField onChange={enteringData} value={enteredData.email} name='email' className="input" variant="outlined" label="Email" />
                        </div>
                        <div className="group">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Geburtsdatum"
                                    inputFormat="MM/dd/yyyy"
                                    value={date}
                                    onChange={enteringDate}
                                    renderInput={(params) => <TextField {...params} style={{ width: "-webkit-fill-available" }} />}
                                />
                            </LocalizationProvider>
                            <TextField onChange={enteringData} value={enteredData.id_number} name='id_number' className="input" variant="outlined" label="Personalausweisnummer" />
                        </div>
                        <div className="group">
                            <TextField onChange={enteringData} value={enteredData.street} name="street" className="input" variant="outlined" label="Straße" />
                            <TextField onChange={enteringData} value={enteredData.street_number} name="street_number" className="input" variant="outlined" label="Hausnummer" />
                        </div>
                        <div className="group">
                            <TextField onChange={enteringData} value={enteredData.zip_code} name="zip_code" className="input" variant="outlined" label="PLZ" type={"number"} />
                            <TextField className="input" variant="outlined" label="Wohnort" />
                        </div>
                        <div className="group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Leistung</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={enteredData.test_name}
                                    label="Leistung"
                                    onChange={enteringSelect}
                                    name='test_name'
                                >
                                    <MenuItem value={"Antigen Schnelltest"}>Antigen Schnelltest</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Benachrichtigungsart</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={enteredData.report_preference}
                                    label="Benachrichtigungsart"
                                    onChange={enteringSelect}
                                    name='report_preference'
                                >
                                    <MenuItem value={"E-Mail"}>E-Mail</MenuItem>
                                    <MenuItem value={"SMS"}>SMS</MenuItem>
                                    <MenuItem value={"Print"}>Print</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="leagal">
                            <div className="heading">
                                RECHTLICHE HINWEISE
                            </div>
                            <div className="notice">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ich habe die Datenschutzbestimmung für die Buchung des Corona Antigen-Schnelltest zur Kenntnis genommen und akzeptiere diese." />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ich stimme der Durchführung eines Corona Tests zu." />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ich habe die AGBs und die Wiederrufsrechterklärung zur Kenntnis genommen und akzeptiere diese." />
                                </FormGroup>
                            </div>
                        </div>
                        <Button style={{ backgroundColor: "#1976d2", color: 'white', fontSize: "1.1rem" }} onClick={go} > abschicken </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
