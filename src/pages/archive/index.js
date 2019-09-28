import React from 'react'

import Layout from '../../components/Layout'
import ArchiveRoll from '../../components/ArchiveRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
              <ArchiveRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
