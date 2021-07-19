"use strict";
const store = require("./store");
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: "https://tic-tac-toe-api-development.herokuapp.com/sign-up",
    method: "POST",
    data: data
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: "https://tic-tac-toe-api-development.herokuapp.com/sign-in",
    method: "POST",
    data: data
  })
}
const signOut = function () {
  return $.ajax({
    url: "https://tic-tac-toe-api-development.herokuapp.com/sign-out",
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + store.token
    }
  })
}
const createGame = function () {
  return $.ajax({
    url: "https://tic-tac-toe-api-development.herokuapp.com/games",
    method: "POST",
    headers: {
      Authorization: "Bearer " + store.token
    }
  })
}
//store with the token we created in curl
module.exports = {
  signUp,
  signIn,
  signOut,
  createGame
}
