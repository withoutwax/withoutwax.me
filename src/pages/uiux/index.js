import React from 'react'

import Layout from '../../components/Layout'
import UIUXRoll from '../../components/UIUXRoll'

export default class UIUXIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            UIUX
              <UIUXRoll />
            </div>
        </section>
      </Layout>
    )
  }
}
