import axios from "axios";
const API_URL=process.env.API_URL
console.log(API_URL);
export const getSongs = ()=>axios.get(API_URL);
export const addSong = (song:{}) => axios.post(API_URL, song);
export const updateSong = (id: string, song:{}) =>
  axios.put(`${API_URL}/song/${id}`, song);
export const deleteSong = (id: string) => axios.delete(`${API_URL}/song/${id}`);
export const getStats=()=>axios.get(`${API_URL}/statistics`)
