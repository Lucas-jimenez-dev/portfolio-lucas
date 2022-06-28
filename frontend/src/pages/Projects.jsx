import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import "../style/Projects.css";

function Projects() {
  return (
    <MainLayout>
      <div className="card-container">
        <div className="card">
          <Link to="/projects/happywastes">
            <img src="src/assets/happywastes.png" alt="happywastes_card" />
          </Link>
        </div>
        <div className="card">
          <Link to="/projects/tousaumarche">
            <img src="src/assets/tousaumarche1.png" alt="happywastes_card" />
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default Projects;
