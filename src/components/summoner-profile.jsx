import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/summoner-actions'

const SummonerProfile = props => {
  console.log(props)
  if (this.state.clicked) {
    return <img className="spinner" src="http://www.shopfashionisland.com/images/spinner.gif" alt=""/>
  }
  return (
    <div>
      <div className="summonerProfileContainer">
        <h1>Summoner Profile</h1>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  getSummonerInfo: state.setSummonerInfo,
})

export default connect(mapStateToProps, actions)(SummonerProfile)
