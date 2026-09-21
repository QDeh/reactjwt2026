import {httpClient} from "../api/http-client";

export async function login(username:string, password:string){
  const response = await httpClient.post("/auth/login",{username, password});
  localStorage.setItem("JWT", response.data.token);
  return response;
}

export function deteteJWT(){
  localStorage.removeItem("JWT");
}
