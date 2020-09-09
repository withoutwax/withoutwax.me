import React from "react";
import Layout from "../../components/Layout";
import ArchiveRoll from "../../components/ArchiveRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="text-center">
            <h2>
              Archive{" "}
              <span role="img" aria-label="archive">
                🗄
              </span>
            </h2>
            <p>
              This place is where I archived all the posts and projects from the
              past.
            </p>
            <div className="text-gray-800 text-2xl">
              <span> &bull; </span>
            </div>
          </div>
          <div className="container">
            <ArchiveRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
