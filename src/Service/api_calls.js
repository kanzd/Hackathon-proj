import axios from "axios";

export  async function postRequest(link,data){
    var res = await axios.post(link,data);
    return res.data;


}