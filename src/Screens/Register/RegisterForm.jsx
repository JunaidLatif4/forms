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

import "./RegisterForm.scss"

const RegisterForm = () => {
    let history = useHistory()

    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState("")
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const enteringDate = (value) => {
        setDate(value)
    }

    const go = () => {
        history.push("/checkin")
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
                                <InputLabel id="demo-simple-select-label">Auswählen</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Auswählen"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="Vorname" />
                            <TextField className="input" variant="outlined" label="Nachname" />
                        </div>
                        <div className="group">
                            <PhoneInput placeholder='Handynummer' className='phone_input' value={number} onChange={setNumber} defaultCountry='US' />
                            <TextField className="input" variant="outlined" label="Email" />
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
                            <TextField className="input" variant="outlined" label="Personalausweisnummer" />
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="Straße" />
                            <TextField className="input" variant="outlined" label="Hausnummer" />
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="PLZ" type={"number"} />
                            <TextField className="input" variant="outlined" label="Wohnort" />
                        </div>
                        <div className="group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Leistung</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Leistung"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Benachrichtigungsart</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Benachrichtigungsart"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>E-Mail</MenuItem>
                                    <MenuItem value={20}>SMS</MenuItem>
                                    <MenuItem value={30}>Print</MenuItem>
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
