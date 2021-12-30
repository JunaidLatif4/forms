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

import Back from "../../assets/checkin.jpeg"

import "./CheckInForm.scss"

const CheckInForm = () => {
    let history = useHistory()

    const [date, setDate] = useState(new Date())
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const enteringDate = (value) => {
        setDate(value)
    }

    const go = () => {
        history.push("/")
    }

    return (
        <>
            <div className="checkinform_container">
                <div className="header">
                    <img src={Back} alt="ERROR" />
                    <p> Check in </p>
                </div>
                <div className="backcolor">
                    <div className="form">
                        <div className="title">
                            CHECK-IN FORM
                        </div>

                        <div className="one">
                            <TextField className="input" variant="outlined" label="Vorname" />
                        </div>
                        <div className="one">
                            <TextField className="input" variant="outlined" label="Nachname" />
                        </div>
                        <div className="one">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Geburtsdatum"
                                    inputFormat="MM/dd/yyyy"
                                    value={date}
                                    onChange={enteringDate}
                                    renderInput={(params) => <TextField {...params} style={{ width: "-webkit-fill-available" }} />}
                                />
                            </LocalizationProvider>
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
                        <Button style={{ backgroundColor: "#1976d2", color: 'white', fontSize: "1.1rem" }} onClick={go} > abschicken </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckInForm
