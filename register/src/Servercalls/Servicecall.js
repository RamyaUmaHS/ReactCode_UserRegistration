import axios from 'axios';
const baseUrl="http://localhost:2020/";

class Servercall{
    static fnPostReq(url,data){
        return axios.post(baseUrl+url,data);
    }


}

export default Servercall;
