import axios from 'axios';
const baseUrl = 'https://morgan-rad-server.herokuapp.com';

export default class Ajax {

  static async authenticate(body) {
    try {
      const res = await axios.post(`${baseUrl}/authenticate`, body);

      return res.data && res.data.token ? res.data.token : null;
    } catch(e) {
      return null;
    }
  }

  static async getEntries(body) {
    try {
      const token = localStorage.getItem('rad_power_test_token');

      const query = `
        query getEntries($serialNumber: String!) {
          entries(serials: $serialNumber) {
              model
              manufacturedMonth
              manufacturedYear
              modelYear
              version
              assemblyPlant
              unique
          }
        }`;
      const variables = {
        serialNumber: body
      }

      const res = await axios.post(`${baseUrl}/graphql`, { query, variables }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data && 
        res.data.data && 
        res.data.data.entries 
          ? res.data.data.entries 
          : null;
      
    } catch(e) {
      return null;
    }
  }
}