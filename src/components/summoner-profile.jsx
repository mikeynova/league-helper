import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import * as actions from '../actions/summoner-actions'

class SummonerProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      summonerName: '',
    }
    this.handleImgError = this.handleImgError.bind(this)
  }

  componentDidMount() {
    const summonerName = this.props.history.location.pathname.slice(18)
    this.setState({ summonerName })
    axios.get('/summonerInfo', {
      headers: { summonerName },
    })
    .then(response => {
      if (response.data.statusObj.status > 400) {
        this.props.history.push('/')
      } else {
        this.props.setSummonerInfo(response.data)
      }
    })
    .catch(err => console.log('axios error message:', err))
  }

  handleImgError(e) {
    e.target.setAttribute('src', `http://avatar.leagueoflegends.com/NA/${this.props.getSummonerInfo.name}.png`)
  }

  render() {
    const winRate = this.props.getSummonerInfo.wins / (this.props.getSummonerInfo.wins + this.props.getSummonerInfo.losses) * 100
    let winElement = <h1/>
    if (this.props.getSummonerInfo.wins) {
      winElement = <h1>{`winrate: ${Math.floor(winRate)}%`}</h1>
    }
    if (this.props.getSummonerInfo.name.toLowerCase() !== this.state.summonerName.replace(/\s/g, '')) {
      return <img className="spinner" src="http://www.shopfashionisland.com/images/spinner.gif" alt=""/>
    }
    return (
      <div className="summonerProfileContainer">
        <h1>{this.props.getSummonerInfo.name}</h1>
        <h1>{this.props.getSummonerInfo.summonerLevel}</h1>
        <img src={`http://ddragon.leagueoflegends.com/cdn/7.5.1/img/profileicon/${this.props.getSummonerInfo.profileIconId}.png`} alt="Can't dislpay" onError={this.handleImgError}/>
        <div>{winElement}</div>
      </div>
    )
  }
}

SummonerProfile.propTypes = {
  getSummonerInfo: PropTypes.shape({
    wins: PropTypes.number,
    losses: PropTypes.number,
    summonerLevel: PropTypes.number,
    profileIconId: PropTypes.number,
    name: PropTypes.string,
    statusObj: PropTypes.shape({
      statusText: PropTypes.string.isRequired,
      status: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  setSummonerInfo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  getSummonerInfo: state.setSummonerInfo.summonerInfo,
})

export default connect(mapStateToProps, actions)(SummonerProfile)
