import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" style={{ textAlign:"center" }}>
              <h1 style={{ textAlign:"center" }}>Contact</h1>
              
              <p><strong>If you wish to contact me, please do so with the email below:</strong></p>

              <a className="mailto" href="mailto:rlagmlckd@gmail.com">rlagmlckd@gmail.com</a>
              
              <br />
              <p>I will be able to reach you within 1 to 3 business days at maximum.</p>
              <p>If I did not reach you within those days, please do not be offended, I am either in a situation where I cannot check my mail system and will reply to you ASAP as I get connected.</p>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
