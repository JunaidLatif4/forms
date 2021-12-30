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

import { checkIn } from "../../api/form"

import { ToastContainer, toast } from 'react-toastify';

import Back from "../../assets/checkin.jpeg"

import "./CheckInForm.scss"

const CheckInForm = () => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        firstName: "",
        lastName: "",
        date: "",
        town: ''
    })

    const [date, setDate] = useState(new Date())

    const handleChange = (event) => {
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
        setDate(value)
        let createTime = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
        setEnteredData((preValue) => {
            return {
                ...preValue,
                date: createTime
            }
        })
    }

    const go = async () => {
        if (!enteredData.firstName || !enteredData.lastName || !enteredData.date || !enteredData.town) {
            toast.warn('Please fill all the fields Carefully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {

            let res = await checkIn(enteredData)
            if (res.error != null) {
                toast.error('Something wen Wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.success('Application submit Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setEnteredData({
                    firstName: "",
                    lastName: "",
                    date: "",
                    town: ''
                })
            }
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
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
                            <TextField name='firstName' value={enteredData.firstName} onChange={enteringData} className="input" variant="outlined" label="Vorname" />
                        </div>
                        <div className="one">
                            <TextField name='lastName' value={enteredData.lastName} onChange={enteringData} className="input" variant="outlined" label="Nachname" />
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
                                <InputLabel id="demo-simple-select-label">Standort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={enteredData.town}
                                    label="Standort"
                                    onChange={handleChange}
                                    name='town'
                                >
                                    <MenuItem value={"Am Marktplatz - Pinneberg"}>Am Marktplatz - Pinneberg</MenuItem>
                                    <MenuItem value={"Westring - Pinneberg"}>Westring - Pinneberg</MenuItem>
                                    <MenuItem value={"Quellental - Pinneberg"}>Quellental - Pinneberg</MenuItem>
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
