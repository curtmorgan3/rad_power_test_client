import axios from 'axios';
const baseUrl = 'http://127.0.0.1:3001';
const token = localStorage.getItem('');

export default class Ajax {

  static async login(body) {
    try {
      const res = await axios.post(`${baseUrl}/users/login`, body);

      return res.data;
    } catch(e) {
      console.error(e);
      return null;
    }
  }

  static async createUser(body) {
    try {
      const res = await axios.post(`${baseUrl}/users/`, body);

      return res.data;
    } catch(e) {
      console.error(e);
      return null;
    }
  }

  static async getCurrentUser() {
    try {
      const res = await axios(`${baseUrl}/users/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;
    } catch(e) {
      console.error(e);
      return null;
    }
  }
}