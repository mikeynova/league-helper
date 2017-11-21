const Summoner = require('../models/summoner-model')

module.exports = {
  '/': {
    get: (req, res) => {
      const summonerObj = {}
      Summoner.getId(req.headers.summonername)
        .then(idRes => {
          if (idRes.status >= 400) {
            summonerObj.statusObj = { status: idRes.status, statusText: idRes.statusText }
            res.send(summonerObj)
            return
          }
          summonerObj.statusObj = { status: idRes.status, statusText: idRes.statusText }
          summonerObj.id = idRes.data.id
          summonerObj.accountId = idRes.data.accountId
          summonerObj.name = idRes.data.name
          summonerObj.profileIconId = idRes.data.profileIconId
          summonerObj.revisionDate = idRes.data.revisionDate
          summonerObj.summonerLevel = idRes.data.summonerLevel
          Summoner.getMatches(idRes.data.accountId)
            .then(matchesRes => {
              if (matchesRes.status < 400) {
                summonerObj.matches = matchesRes.matches
              }
              Summoner.getWins(idRes.data.id)
                .then(winsRes => {
                  if (winsRes !== undefined) {
                    summonerObj.queueType = winsRes.queueType
                    summonerObj.hotStreak = winsRes.hotStreak
                    summonerObj.wins = winsRes.wins
                    summonerObj.veteran = winsRes.hotStreak
                    summonerObj.losses = winsRes.losses
                    summonerObj.playerOrTeamId = winsRes.playerOrTeamId
                    summonerObj.leagueName = winsRes.leagueName
                    summonerObj.playerOrTeamName = winsRes.playerOrTeamName
                    summonerObj.inactive = winsRes.inactive
                    summonerObj.rank = winsRes.rank
                    summonerObj.freshBlood = winsRes.freshBlood
                    summonerObj.leagueId = winsRes.leagueId
                    summonerObj.tier = winsRes.tier
                    summonerObj.leaguePoints = winsRes.leaguePoints
                  }
                  Summoner.highestMastery(idRes.data.id)
                    .then(masteryRes => {
                      summonerObj.mastery = masteryRes
                      res.send(summonerObj)
                    }).catch(err => console.log('error in masteryRes controller', err))
                }).catch(err => console.log('error in winsRes controller', err))
            }).catch(err => console.log('error in matchesRes controller', err))
        }).catch(err => console.log('error in getId controller', err))
    },
  },
}
