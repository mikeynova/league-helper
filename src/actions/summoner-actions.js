export const SET_SUMMONER_INFO = 'SET_SUMMONER_INFO'

export function setSummonerInfo(data) {
  return {
    type: SET_SUMMONER_INFO,
    payload: data,
  }
}
