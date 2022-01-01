import React, { useState, useEffect } from 'react'
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
import deLocale from 'date-fns/locale/de'

import PhoneInput from 'react-phone-number-input'

import Back from "../../assets/registration.jpeg"

import { register } from "../../api/form"

import { ToastContainer, toast } from 'react-toastify';

import "./RegisterForm.scss"

const RegisterForm = () => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        name: "",
        full_name: "",

        first_name: "",
        last_name: "",
        email: "",
        cemail: "",
        id_number: "",
        street: "",
        street_number: "",
        zip_code: '',
        towncity: "",
        report_preference: "",
        test_name: "",

        date_of_birth: "01-01-1980",
        phone_number: "",

        create_lab_test: "1",
        appointment: null,
        active_subscription: 'Active',

        place: ""

    })
    const [error, setError] = useState({
        first_name: false,
        last_name: false,
        email: false,
        cemail: false,
        id_number: false,
        street: false,
        street_number: false,
        zip_code: false,
        towncity: false,
        report_preference: false,
        test_name: false,

        date_of_birth: false,
        phone_number: false,

        place: false
    })

    const [pickerDate, setPickerDate] = useState(new Date("01.01.1980"))

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
        setPickerDate(value)
        // let createTime = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`
        let createTime = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
        setEnteredData((preValue) => {
            return {
                ...preValue,
                date_of_birth: createTime
            }
        })
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
        if (!enteredData.first_name || !enteredData.last_name || !enteredData.email || !enteredData.street || !enteredData.street_number || !enteredData.zip_code || !enteredData.towncity || !enteredData.report_preference || !enteredData.test_name || !enteredData.phone_number || !enteredData.date_of_birth) {
            toast.warn('Please fill all the fields Carefully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            if (!enteredData.first_name) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        first_name: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        first_name: false
                    }
                })
            }

            if (!enteredData.last_name) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        last_name: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        last_name: false
                    }
                })
            }

            // if (!enteredData.last_name) {
            //     setError((preValue) => {
            //         return {
            //             ...preValue,
            //             last_name: "This field is required."
            //         }
            //     })
            // }else{
            //     setError((preValue)=>{
            //         return{
            //             ...preValue,
            //             first_name:false
            //         }
            //     })
            // }

            if (!enteredData.email) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        email: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        email: false
                    }
                })
            }

            if (!enteredData.cemail || (enteredData.email != enteredData.cemail)) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        cemail: "Email doesn't match"
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        cemail: false
                    }
                })
            }
            // if (enteredData.email != enteredData.cemail) {
            //     setError((preValue) => {
            //         return {
            //             ...preValue,
            //             cemail: "Email doesn't match"
            //         }
            //     })
            // } else {
            //     setError((preValue) => {
            //         return {
            //             ...preValue,
            //             cemail: false
            //         }
            //     })
            // }

            if (!enteredData.id_number) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        id_number: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        id_number: false
                    }
                })
            }

            if (!enteredData.street) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        street: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        street: false
                    }
                })
            }

            if (!enteredData.street_number) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        street_number: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        street_number: false
                    }
                })
            }

            if (!enteredData.zip_code) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        zip_code: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        zip_code: false
                    }
                })
            }

            if (!enteredData.towncity) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        towncity: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        towncity: false
                    }
                })
            }

            if (!enteredData.report_preference) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        report_preference: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        report_preference: false
                    }
                })
            }

            if (!enteredData.test_name) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        test_name: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        test_name: false
                    }
                })
            }

            if (!enteredData.date_of_birth) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        date_of_birth: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        date_of_birth: false
                    }
                })
            }

            if (!enteredData.place) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        place: "This field is required."
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        place: false
                    }
                })
            }

        } else {
            let res = await register(enteredData)
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
                    name: "",
                    full_name: "",

                    first_name: "",
                    last_name: "",
                    email: "",
                    cemail: "",
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
            }
        }
    }

    useEffect(() => {
        if (enteredData.email) {
            if (enteredData.cemail != enteredData.email) {
                setError((preValue) => {
                    return {
                        ...preValue,
                        cemail: "Email doesn't match"
                    }
                })
            } else {
                setError((preValue) => {
                    return {
                        ...preValue,
                        cemail: false
                    }
                })
            }
        }
    }, [enteredData])

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
                                    error={error.towncity}
                                >
                                    <MenuItem value={"Am Marktplatz - Pinneberg"}>Am Marktplatz - Pinneberg</MenuItem>
                                    <MenuItem value={"Westring - Pinneberg"}>Westring - Pinneberg</MenuItem>
                                    <MenuItem value={"Quellental - Pinneberg"}>Quellental - Pinneberg</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="group">
                            <TextField error={error.first_name} onChange={enteringData} value={enteredData.first_name} name='first_name' className="input" variant="outlined" label="Vorname" />
                            <TextField error={error.last_name} onChange={enteringData} value={enteredData.last_name} name='last_name' className="input" variant="outlined" label="Nachname" />
                        </div>
                        <div className="group">
                            <PhoneInput placeholder='Handynummer' className='phone_input' value={enteredData.phone_number} onChange={enteringNumber} defaultCountry='DE' />
                            <TextField error={error.id_number} onChange={enteringData} value={enteredData.id_number} name='id_number' className="input" variant="outlined" label="Personalausweisnummer" />
                        </div>
                        <div className="group">
                            <TextField error={error.email} onChange={enteringData} value={enteredData.email} name='email' className="input" variant="outlined" label="Email" />
                            <div className="cemail_b">
                                <TextField error={error.cemail} onChange={enteringData} value={enteredData.cemail} name='cemail' className="input" variant="outlined" label="Confirm Email" />
                                {error.cemail && <p> {error.cemail} </p>}
                            </div>
                        </div>
                        <div className="one">
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale} >
                                <DesktopDatePicker
                                    // mask={'__.__.____'}
                                    label="Geburtsdatum"
                                    inputFormat="dd.MM.yyyy"
                                    value={pickerDate}
                                    onChange={enteringDate}
                                    renderInput={(params) => <TextField {...params} style={{ width: "-webkit-fill-available" }} />}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className="group">
                            <TextField error={error.street} onChange={enteringData} value={enteredData.street} name="street" className="input" variant="outlined" label="Straße" />
                            <TextField error={error.street_number} onChange={enteringData} value={enteredData.street_number} name="street_number" className="input" variant="outlined" label="Hausnummer" />
                        </div>
                        <div className="group">
                            <TextField error={error.zip_code} onChange={enteringData} value={enteredData.zip_code} name="zip_code" className="input" variant="outlined" label="PLZ" type={"number"} />
                            <TextField error={error.place} name='place' onChange={enteringData} className="input" variant="outlined" label="Wohnort" />
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
                                    error={error.test_name}
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
                                    error={error.report_preference}
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
                        <Button style={{ backgroundColor: "#1976d2", color: 'white', fontSize: "1.1rem", width: "200px", alignSelf: "center" }} onClick={go} > abschicken </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
