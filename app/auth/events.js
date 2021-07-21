const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")
const store = require("./../store")

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
const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  api.createGame()
  .then(ui.onCreateGameSuccess)
  .catch(ui.onFailure)
}
const onPlayGame = function (event) {
  event.preventDefault()
  const click = event.target
  const cellIndex = $(click).data("cell-index")
  console.log(cellIndex)
  console.log(store.game)
  store.game.cells[cellIndex]
  console.log(store.game.cells[cellIndex])
  // api.playGame()
  // .then(ui.onPlayGameSuccess)
  // .catch(ui.onFailure)
}
//const onRestartGame {}



module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onPlayGame
  //onRestartGame
}
