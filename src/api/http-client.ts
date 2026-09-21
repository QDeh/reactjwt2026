import axios, {HttpStatusCode} from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("JWT");
    if (token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

httpClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error.response.status === HttpStatusCode.Unauthorized && error.config.url === "/auth/login"){
      alert("Votre identifiant ou votre mot de passe est incorrect.");
    } else if(error.response.status === HttpStatusCode.Forbidden){
      alert("Vous ne pouvez pas réaliser cette action.");
    } else{
      alert("Une erreur est survenue.");
    }
    return Promise.reject(error);
  }
);
