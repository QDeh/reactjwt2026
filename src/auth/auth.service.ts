import {httpClient} from "../api/http-client";

export async function login(username:string, password:string){
  const response = await httpClient.post("/auth/login",{username, password});
  localStorage.setItem("JWT", response.data.token);
  return response;
}

export function deleteJWT(){
  localStorage.removeItem("JWT");
}

export function getRoles(){
  const token = localStorage.getItem("JWT");
  if (token){
    const decodedPayload = JSON.parse(atob(token.split(".")[1]));
    return decodedPayload.scope.split(" ");
  }
  return null;
}

export function hasRole(role:string){
  const roles = getRoles()
  if(roles === null){
    return false;
  }
  for (let r of roles){
    if(r === role){
      return true;
    }
  }
  return false;
}
