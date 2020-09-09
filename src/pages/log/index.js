import React from "react";

import Layout from "../../components/Layout";
import ThoughtsRoll from "../../components/ThoughtsRoll";

export default class ThoughtsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div style={{ textAlign: "center" }}>
            <h2>
              Thoughts
              <span role="img" aria-label="camera">
                {" "}
                💭
              </span>
            </h2>
            <p>
              Books
              <span role="img" aria-label="books">
                {" "}
                📚
              </span>
              • Thoughts
              <span role="img" aria-label="thoughts">
                {" "}
                💭
              </span>
              • Photos
              <span role="img" aria-label="photo">
                {" "}
                📷
              </span>
              • Life
              <span role="img" aria-label="me">
                {" "}
                💁🏻‍♂️
              </span>
            </p>
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
            <ThoughtsRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
