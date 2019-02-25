import React from 'react'

import Layout from '../../components/Layout'
import LabRoll from '../../components/LabRoll'

export default class LogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
              <LabRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
