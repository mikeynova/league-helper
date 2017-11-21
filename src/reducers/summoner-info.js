import { SET_SUMMONER_INFO } from '../actions/summoner-actions'

const initialState = {
  summonerInfo: {
    statusObj: { status: -1, statusText: 'initial' },
    accountId: -1,
    freshBlood: false,
    hotStreak: false,
    id: -1,
    inactive: false,
    leagueId: 'initial',
    leagueName: 'initial',
    leaguePoints: -1,
    losses: -1,
    mastery: [],
    matches: [],
    name: 'initial',
    playerOrTeamId: 'initial',
    playerOrTeamName: 'initial',
    profileIconId: -1,
    queueType: 'initial',
    rank: 'initial',
    revisionDate: -1,
    summonerLevel: -1,
    tier: 'initial',
    veteran: false,
    wins: -1,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMONER_INFO:
      return { ...state, summonerInfo: action.payload }
    default:
      return state
  }
}
