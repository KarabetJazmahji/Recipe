import axios from "axios";

const KEY = "811884e30cmsh504ac0ac8447419p155cc4jsnbd8398b27283";
 
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api",
  params: {
      key: KEY
  }
});