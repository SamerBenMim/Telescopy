import axios from 'axios';
import { api } from "./config"

export const GetTelescops = async() => {
    console.log("eeeeeezzzzzzzzzzzzzzzzzzzzzzzzzzzzzeee")
    return await axios.get(`${api}/telescops`)
        .then(res => {
            console.log("res",res)
            if (res.data.status === 'success') {
               
                return true

            } else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false;
        });
}