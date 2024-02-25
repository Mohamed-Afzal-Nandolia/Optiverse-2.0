import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/"

export const addTodo = (register) => axios.post(REST_API_BASE_URL + 'api/', register);

export const getTodo = (register) => axios.post(REST_API_BASE_URL + 'api/login', register);