import React from "react";

import Layout from "../../components/Layout";
import CodeRoll from "../../components/CodeRoll";

export default class CodeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div style={{ textAlign: "center" }}>
            <h2>
              Code
              <span role="img" aria-label="computer">
                {" "}
                💻
              </span>
            </h2>
            <p>Things that I learned about programming</p>
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
            <CodeRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
