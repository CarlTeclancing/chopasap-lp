import {getFunctions, httpsCallable} from "firebase/functions"
import { app } from "./config"
import { functionsList } from "chop_asap_types";

const functions = getFunctions(app)

export async function getCode(email) {
    const res = await httpsCallable( functions, functionsList.getCode )({ email })     
    console.log(res);
    
    const { data } = res  
    return data.userId;
    
}

 export  async function getPassword(userId,code){
    console.log(userId, code);
    
    const res = await httpsCallable(functions, functionsList.getPassword)({
        userId,
        code,
      });
    const { data } = res
    return data.password
  }