import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/"

export const addTodo = (register) => axios.post(REST_API_BASE_URL + 'api/', register);

export const getTodo = (LoginDetails) => axios.post(REST_API_BASE_URL + 'api/login', LoginDetails);

export const getPost = () => axios.get(REST_API_BASE_URL + 'api/posts/');

export const addPost = (postText) => axios.post(REST_API_BASE_URL + 'api/posts/', postText);






























// //JWT token Authentication
// export const login = async (email, password) => {
//     try {
//       const response = await axios.post('/login', { email, password });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       return true;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   export const isAuthenticated = () => {
//     const token = localStorage.getItem('token');
//     return token ? true : false;
//   };
  
//   export const logout = () => {
//     localStorage.removeItem('token');
//   };