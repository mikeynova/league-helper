const axios = require('axios')
const { riot } = require('../../credentials.js')

const Summoner = module.exports

Summoner.getId = summonerName => (
  axios({
    url: summonerName,
    baseURL: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/',
    method: 'get',
    headers: {
      'X-Riot-Token': riot,
    },
  })
  .then(res => res)
  .catch(err => ({ status: err.response.status, statusText: err.response.statusText }))
)

Summoner.getMatches = accountId => (
  axios({
    url: `${accountId}`,
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/',
    headers: {
      'X-Riot-Token': riot,
    },
  })
  .then(res => res.data)
  .catch(err => ({ status: err.response.status, statusText: err.response.statusText }))
)

Summoner.getWins = summonerId => (
  axios({
    url: `${summonerId}`,
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/',
    headers: {
      'X-Riot-Token': riot,
    },
  })
  .then(res => res.data[0])
  .catch(err => console.log('getWins error message:', err))
)

Summoner.highestMastery = summonerId => (
  axios({
    url: `${summonerId}`,
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/',
    headers: {
      'X-Riot-Token': riot,
    },
  })
  .then(res => res.data)
  .catch(err => console.log('highestMastery error message:', err))
)
