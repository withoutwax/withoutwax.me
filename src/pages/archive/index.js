import React from 'react'

import Layout from '../../components/Layout'
import ArchiveRoll from '../../components/ArchiveRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div style={{ textAlign: "center" }}>
            <h2>Archive</h2>
            <p>This place is where I archived all the posts and projects from the past.</p>
            <div style={{ marginBottom: "2rem", fontSize: "3rem", color: "#c9c9c9"}}><span> &bull; </span></div>
          </div>
          <div className="container">
            <ArchiveRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
