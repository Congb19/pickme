import axios from 'axios';

let hosturl = "http://192.168.137.156:8999/"

hosturl = "http://blog.congb19.com"

export const testget = async () => {
  let api = ``;
  let ret = await axios.get(`${hosturl}${api}`).then((res) => {
    console.log(res);
  });
  return ret;
}

export const login = async (params) => {
  params;
  let tmpparams = {
    telphone: "15959595959",
    password: "123123132"
  }
  let api = `login`;
  let ret = await axios.post(`${hosturl}+${api}`, tmpparams).then((res) => {
    console.log("login... ", res);
  });
  return ret;
}

export const getNumber = async (params) => {
  let api = `getNumber?index=${params}`;
  let ret = await axios.get(`${hosturl}${api}`).then((res) => {
    console.log("get...", res);
  });
  return ret;
}

export const choseNumber = async (params) => {
  let api = `choseNumber`;
  let ret = await axios.post(`${hosturl}${api}`, params).then((res) => {
    console.log("chose...", res);
  });
  return ret;
}