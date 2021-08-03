import axios from 'axios';

export const testget = () => {
  axios.get("/api/");
  return "ok";
}