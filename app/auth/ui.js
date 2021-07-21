"use strict"
// might take out the line under this because I have been using the css to do this action instead. This was just a quick fix.
$(".game-board").hide()
const store = require("./store")

const onSignUpSuccess = (response) => {
  $("#message").text(`Thank you for signing up ${response.user.email}`)
  $("#sign-up").trigger("reset")
  $("#sign-in-form").css('display', 'block')
  $("#sign-in-header").css('display', 'block')
  $("#sign-up-form").css('display', 'none')
  $("#sign-up-header").css('display', 'none')
}

const onSignInSuccess = (response) => {
  $("#message").text(`Sign-in was successful ${response.user.email}`)
  store.token = response.user.token
  $("#sign-in-form").trigger("reset")
  $("#create-game").css("display", "block")
  $("#create-game-header").css("display", "block")
  $("#sign-out").css('display', 'block')
  $("#sign-out-header").css('display', 'block')
  $("#sign-in-form").css('display', 'none')
  $("#sign-in-header").css('display', 'none')
  $("#sign-up-form").css("display", "none")
  $("#sign-up-header").css("display", "none")
  // $("#create-game-header").css('display', 'block')
  // $("#selection-box-header").css('display', 'block')
  // $(".game-board").css('display', 'block')
  // $("#game-content").css('display', 'block')
  // $("#restart").css('display','block')
  // $(".cell").css('display','block')
}
const onSignOutSuccess = () => {
  $("#message").text(`Sign-out was successful`)
  $("#sign-out").trigger("reset")
  $("#sign-in-form").css('display', 'block')
  $("#sign-in-header").css('display', 'block')
  $("#sign-up-form").css('display', 'block')
  $("#sign-up-header").css('display', 'block')
  $("#sign-out").css('display', 'none')
  $("#sign-out-header").css('display', 'none')
  $("#create-game").css('display', 'none')
  $("#create-game-header").css('display', 'none')
  $("#selection-box-header").css('display', 'none')
  $(".game-board").css('display', 'none')
  $("#game-content").css('display', 'none')
  $("#restart").css('display','none')
  $(".cell").css('display','none')
  $(".selection-box").css('display', 'none')
  $(".game-status").css('display', 'none')
}

const onCreateGameSuccess = (response) => {
  $("#message").text(`Goodluck!`);
  store.game = response.game;
  console.log(store.game);
  $("#create-game-header").css('display', 'block')
  $(".playerX").css('display', 'block')
  $(".playerO").css('display','block')
  $("#game-board").css('display', 'grid')
  $("#game-content").css('display', 'block')
  $("#restart").css('display','block')
  $(".cell").css('display','block')
  $("#selection-box-header").css('display', 'block')
  $(".selection-box").css('display', 'block')
  $(".game-status").css('display', 'block')
}
const onFailure = (error) => {
  console.log(`Error, status: ${error.status}`)
  $("#message").text(`Error... status: ${error.status}`)
  $("#sign-up-form").trigger("reset")
}

module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onCreateGameSuccess
}
