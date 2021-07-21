"use strict"

const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// const playGame = (game) => {
//   return $.ajax ({
//     url: config.apiUrl + '/games/' + store.game._id,
//     method: 'PATCH',
//     data,
//     headers: {
//       Authorization: 'Bearer ' + store.token
//     }
//   })
// }
//store with the token we created in curl
module.exports = {
  signUp,
  signIn,
  signOut,
  createGame
  //playGame
}
