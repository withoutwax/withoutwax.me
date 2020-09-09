import React from "react";

import Layout from "../../components/Layout";
import ProjectRoll from "../../components/ProjectRoll";

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div style={{ textAlign: "center" }}>
            <h2>
              Project
              <span role="img" aria-label="project">
                {" "}
                🕹
              </span>
            </h2>
            <p>Things that I tinker on my spare time.</p>
            <div
              style={{
                marginBottom: "2rem",
                fontSize: "3rem",
                color: "#c9c9c9",
              }}
            >
              <span> &bull; </span>
            </div>
          </div>
          <div className="container">
            <ProjectRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
