import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api, https://kinmat-crud-app.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});
