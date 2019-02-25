import React from 'react'

import Layout from '../../components/Layout'
import CodeRoll from '../../components/CodeRoll'

export default class CodeIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
              <CodeRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
