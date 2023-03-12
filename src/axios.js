import axios from "axios";

export default axios.create({
  baseURL: "https://kinmat-crud-app.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});
