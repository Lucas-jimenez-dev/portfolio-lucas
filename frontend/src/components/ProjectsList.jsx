import React, { useContext } from "react";
import Logout from "./Logout";
import LoginContext from "./Context";

function ProjectsList() {
  const { login, setLogin } = useContext(LoginContext);
  const handleClick = () => {
    setLogin(!login);
  };
  return (
    <div>
      ProjectsList
      <Logout handleClick={handleClick} />
    </div>
  );
}

export default ProjectsList;
