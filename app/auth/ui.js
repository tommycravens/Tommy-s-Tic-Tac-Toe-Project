"use strict"
// might take out the line under this because I have been using the css to do this action instead. This was just a quick fix.
$("#game-board").hide()
const store = require("./../store")

const onSignUpSuccess = (response) => {
  $("#message").text(`Thank you for signing up ${response.user.email}`)
  $("#sign-up-form").trigger("reset")
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
  // $("#game-board").css('display', 'block')
  // $(".cell").css('display','block')
}
const onSignOutSuccess = () => {
  $("#message").text(`Sign-out was successful!`)
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
  $("#game-board").css('display', 'none')
  $("#game-content").css('display', 'none')
  $(".cell").css('display','none')
  $(".selection-box").css('display', 'none')
}

const onCreateGameSuccess = (response) => {
  $("#message").text(`Game has started: Goodluck!`)
  store.game = response.game
  store.tied = false
  console.log(store.game)
  $("#create-game-header").css('display', 'none')
  $("#create-game").css('display', 'block')
  $("#game-board").css('display', 'grid')
  $(".cell").css('display','block')
  $("#selection-box-header").css('display', 'block')
  $(".selection-box").css('display', 'block')
  $('.cell').text('')
}
const onPlayGameSuccess = (response) => {
  $('#message').text(`Game in progress.`)
store.game = response.game
if (store.game.over) {
  if (store.tied) {
    $("#message").text("It's a tie!")
  } else {
    $("#message").text(`'${store.winner}' is the winner !`)
  }

}
// else (store.game.over) {
//   $("#message").text("It's a tie!")
// }
console.log(response.game)
}
// const onWinGameSuccess = (response) => {
//   $("#message").text(`Great Work !`)
// //     if onPlayGame != onWinGame
// //     console.log($("message").text(`Better Luck Next Time !`))
// store.game = winner.player
// console.log(store.winner)
// }

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
  onCreateGameSuccess,
  onPlayGameSuccess
}
