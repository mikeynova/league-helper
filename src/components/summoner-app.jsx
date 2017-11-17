import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../actions/summoner-actions'

class Summoner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: '',
      clicked: false,
    }
    this.handleSummonerID = this.handleSummonerID.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSummonerID(e) {
    e.preventDefault()
    this.setState({
      clicked: true,
    })
    // axios.get('/summonerInfo', {
    //   headers: { summonerName: this.state.summonerName },
    // })
    // .then(response => {
    //   if (response) {
    //     this.props.setSummonerInfo(response.data)
    //     this.props.history.push('/summoner-profile')
    //   } else {
    //     this.setState({
    //       summonerName: '',
    //     })
    //   }
    // })
    this.props.history.push('/summoner-profile', { summoner: this.state.summonerName })
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

const mapStateToProps = state => ({
  getSummonerInfo: state.setSummonerInfo,
})

Summoner.propTypes = {
  setSummonerInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default connect(mapStateToProps, actions)(Summoner)
