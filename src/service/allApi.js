import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"


//register request
export const requestApi= async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

//login request
export const loginApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,'')
}

//add project
export const addProjectApi=async()=>{
 return await commonApi('POST',`${serverUrl}/add-project`,reqBody,reqHeader)
}

// get Home projects
export const HomeProjectApi=async()=>{
    return await commonApi('GET',`${serverUrl}/home-project`)
}

// get all projects
export const getAllProject=async()=>{
    return await commonApi('GET',`${serverUrl}/all-project`)
}
// get user projects
export const getUserProject=async()=>{
    return await commonApi('GET',`${serverUrl}/user-project`)
}