import { number, string, bool } from 'prop-types'
import { SET_SUMMONER_INFO } from '../actions/summoner-actions'

const initialState = {
  accountId: number,
  freshBlood: bool,
  hotStreak: bool,
  id: number,
  inactive: bool,
  leagueId: string,
  leagueName: string,
  leaguePoints: number,
  losses: number,
  mastery: [],
  matches: [],
  name: string,
  playerOrTeamId: string,
  playerOrTeamName: string,
  profileIconId: number,
  queueType: string,
  rank: string,
  revisionDate: number,
  summonerLevel: number,
  tier: string,
  veteran: bool,
  wins: bool,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMONER_INFO:
      return action.payload
    default:
      return state
  }
}
