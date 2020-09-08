import React from 'react'

import Layout from '../../components/Layout'
import LabRoll from '../../components/LabRoll'

export default class ThoughtsIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div style={{ textAlign: "center" }}>
            <h2>Lab<span role="img" aria-label="hammer"> 🔨</span></h2>
            <p>Things that I do as a hobby</p>
            <div style={{ marginBottom: "2rem", fontSize: "3rem", color: "#c9c9c9"}}><span> &bull; </span></div>
          </div>
          <div className="container">
              <LabRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
