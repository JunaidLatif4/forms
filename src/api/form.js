import axios from "../axiosinstance"

let register = async (val) => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        let res = await axios({
            url: 'api/method/ctc.app.create_patient',
            method: "POST",
            headers: {
                'Authorization': 'token abd07bdcb51ea14:1533be168c28951',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            },
            data: {
                ...val
            }
        })

        resolved.data = res.data

    } catch (err) {
        if (err.response) {
            if (err.response.data.exc_type == "ValidationError") {
                let errorArr = JSON.parse(err.response.data._server_messages)
                let jsonData = JSON.parse(errorArr[0])

                resolved.error = jsonData.message
            } else {
                resolved.error = err.response.data.message
            }
        } else {
            resolved.error = "Somthing went Wrong"
        }
    }

    return resolved
}
let checkIn = async (val) => {
    let resolved = {
        data: null,
        error: null
    }

    let fData = new FormData()
    fData.append('first_name', val.firstName);
    fData.append('last_name', val.lastName);
    fData.append('location', val.town);
    fData.append('date_of_birth', val.date)



    try {
        let res = await axios({
            url: 'api/method/ctc.app.create_lab_test_from_patient',
            method: "POST",
            headers: {
                'Authorization': 'token abd07bdcb51ea14:1533be168c28951',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            },
            data: fData
        })

        resolved.data = res.data

    } catch (err) {
        if (err.response) {
            resolved.error = err.response.data.message
        } else {
            resolved.error = "Somthing went Wrong"
        }
    }

    return resolved
}

export { register, checkIn }