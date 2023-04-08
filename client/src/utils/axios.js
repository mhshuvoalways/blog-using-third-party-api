import Axios from "axios";

let baseURL =
  process.env.NODE_ENV === "production"
    ? "https://blog-using-third-party-api.vercel.app"
    : "http://localhost:5000";

const intence = Axios.create({
  baseURL,
});

export default intence;
