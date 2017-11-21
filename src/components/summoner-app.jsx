import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Summoner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: '',
    }
    this.handleSummonerID = this.handleSummonerID.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSummonerID(e) {
    e.preventDefault()
    this.props.history.push(`/summoner-profile/${this.state.summonerName}`)
  }

  handleChange(e) {
    this.setState({
      summonerName: e.target.value,
    })
  }

  render() {
    return (
      <div className="summoner-app">
        <div className="summonerInputContainer">
          <h1 className="summonerInputHeader">hey</h1>
          <form onSubmit={this.handleSummonerID}>
            <input className="summonerNameInput" onChange={this.handleChange} value={this.state.summonerName} type="text"/>
          </form>
        </div>
      </div>
    )
  }
}

Summoner.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default Summoner
