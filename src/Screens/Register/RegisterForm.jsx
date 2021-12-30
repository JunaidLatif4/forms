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
                    <p> Registration </p>
                </div>

                <div className="backcolor">
                    <div className="form">
                        <div className="title">
                            REGISTRATION FORM
                        </div>
                        <div className="one">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="First Name" />
                            <TextField className="input" variant="outlined" label="Last Name" />
                        </div>
                        <div className="group">
                            <PhoneInput placeholder='Enter phone number' className='phone_input' value={number} onChange={setNumber} defaultCountry='US' />
                            <TextField className="input" variant="outlined" label="Email" />
                        </div>
                        <div className="group">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date of Birth"
                                    inputFormat="MM/dd/yyyy"
                                    value={date}
                                    onChange={enteringDate}
                                    renderInput={(params) => <TextField {...params} style={{ width: "-webkit-fill-available" }} />}
                                />
                            </LocalizationProvider>
                            <TextField className="input" variant="outlined" label="ID Number" />
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="Street" />
                            <TextField className="input" variant="outlined" label="House Number" />
                        </div>
                        <div className="group">
                            <TextField className="input" variant="outlined" label="ZIP" type={"number"} />
                            <TextField className="input" variant="outlined" label="Place of residence" />
                        </div>
                        <div className="group">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Performance</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Performance"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Notification type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Notification type"
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
                                LEGAL NOTICE
                            </div>
                            <div className="notice">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I have read the privacy policy  for booking the Corona Antigen rapid test and I  accept it." />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I consent to a corona test being carried out." />
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I have read the  terms  and conditions and the  right of withdrawal  and accept them." />
                                </FormGroup>
                            </div>
                        </div>
                        <Button style={{ backgroundColor: "#1976d2", color: 'white', fontSize: "1.1rem" }} onClick={go} > send </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
