import { useContext } from "react";
import LoginContext from "../components/Context";
import ProjectsList from "../components/ProjectsList";
import Login from "../components/Login";

function Admin() {
  const { login, setLogin } = useContext(LoginContext);
  return <div>{login ? <ProjectsList /> : <Login />}</div>;
}

export default Admin;
