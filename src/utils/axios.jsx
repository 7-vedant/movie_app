import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGI1NTk2MDM1NWVkMzMxMmZjOGRlODJiMjNlYmU1YiIsInN1YiI6IjY1YjIxZjRhZmQxNDBiMDE4NWEwZTVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zhkZU9CWG_cbjxxvzcn4IRvpwyXAxjjy1wQBLr09FfQ'
      },
});

export default instance