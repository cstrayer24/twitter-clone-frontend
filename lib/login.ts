import axios from "axios";

async function loginuser(email: string, password: string) {
  const { data } = await axios.post("api/signin", { email, password });
}

export default loginuser;
