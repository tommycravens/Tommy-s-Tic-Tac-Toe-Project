const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")
const store = require("./../store")
let turn = true



const onSignUp = function (event) {
  event.preventDefault()
  console.log("Hello")
  //get info from event and form
  const form = event.target
  console.log(form)

  const data = getFormFields(form)
  console.log(data)

  //make an api call using ajax
  api.signUp(data)
  .then(ui.onSignUpSuccess)
  .catch(ui.onFailure)

  //Handle successful api calls with .then
  //handle the failed api call with .catch
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log("Hello")
  //get info from event and form
  const form = event.target
  console.log(form)

  const data = getFormFields(form)
  console.log(data)

  //make an api call using ajax
  api.signIn(data)
  .then(ui.onSignInSuccess)
  .catch(ui.onFailure)

  //Handle successful api calls with .then
  //handle the failed api call with .catch
}
const onSignOut = function () {
  api.signOut()
  .then(ui.onSignOutSuccess)
  .catch(ui.onFailure)
}
// this is my start game button and brings up the game board and selection boxes
const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  api.createGame()
  .then(ui.onCreateGameSuccess)
  .catch(ui.onFailure)
}

const onPlayGame = function (event) {
  event.preventDefault()
  const cell = event.target
  const cellIndex = $(cell).data("cell-index")
  const player = turn ? 'x' : 'o'
  if ($(cell).text()) return
  $(cell).text(player)
  const game = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: false 
    }
  }
  api.playGame(game)
  .then(ui.onPlayGameSuccess)
  .catch(ui.onFailure)
turn = !turn
return turn
}
 

// let currentPlayer = 'x'
// const onGameBoardClick = (event) => {
//   event.preventDefault()
//   console.log('click')     
//   const gameBoard = $(event.target)
//   gameBoard.text(currentPlayer)
//   currentPlayer = currentPlayer === 'O' ? 'x' : 'O'
// }


  //const onRestartGame = function (event) {
//}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onPlayGame
  // onGameBoardClick
  //onRestartGame
}
