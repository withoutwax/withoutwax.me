import React from 'react'

import Layout from '../../components/Layout'
import LogRoll from '../../components/LogRoll'

export default class LogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
              <LogRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
