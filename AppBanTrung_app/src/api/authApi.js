import { Base_Url } from "./BaseUrl";
import axios from "axios";


const Login = async (TenTaiKhoan,MatKhau) => {
    try {
        let data = await axios.post(`${Base_Url}/user/login`,{
            TenTaiKhoan:TenTaiKhoan,
            MatKhau:MatKhau
        },
        );
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return null;
    } 
}

export default {
    Login
}