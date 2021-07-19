"use strict"

const store = require("./store")

const onSignUpSuccess = (response) => {
  $("#message").text(`Thank you for signing up ${response.user.email}`)
  $("#sign-up").trigger("reset")
}
const onFailure = (error) => {
  console.log(`Error, status: ${error.status}`)
  $("#message").text(`Error... status: ${error.status}`)
  $("#sign-up-form").trigger("reset")
}
const onSignInSuccess = (response) => {
  $("#message").text(`Sign-in was successful ${response.user.email}`)
  store.token = response.user.token;
  $("#sign-in-form").trigger("reset")
  $("#sign-in-form").hide()
  $("#sign-up-form").hide()
  $("#sign-out").show()
}
const onSignOutSuccess = (response) => {
  $("#message").text(`Sign-out was successful`)
  store.token = response.user.token
  $("#sign-out").trigger("reset")
  $("#sign-in-form").show()
  $("#sign-up-form").show()
  $("#sign-out").hide()
}
const onCreateGameSuccess = () => {

}

module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onCreateGameSuccess
}
