const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")

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
  api.createGame()
  .then(ui.onCreateGameSuccess)
  .catch(ui.onFailure)
}
// const updateGame = function () {
//   console.log(store.token)
//   return $.ajax({
//     url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
//     method: 'PATCH',

//   })
// }




module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame
}
