import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

class Beers extends Component {

  state = { beers: {} }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => this.setState({ beers: res.data }) )
  }

  render() {
    //const { beers: { name, description }} = this.state;
    let { beers } = this.state

    return (
      <Card>
          <Card.Content key={beers.id}>
            {beers.name}
          </Card.Content>
          <Card.Description>{beers.description}</Card.Description>
      </Card>

    )
  }
}

export default Beers
