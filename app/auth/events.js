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
  turn = true
  api.createGame()
  .then(ui.onCreateGameSuccess)
  .catch(ui.onFailure)
}
// this creates the text of x and o in the cells on the click event switching b/w x and o using turns.
const onPlayGame = function (event) {
  event.preventDefault()
  const cell = event.target
  const cellIndex = $(cell).data("cell-index")
  if (store.game.over) return
  if ($(cell).text()) return
  const player = turn ? "x" : "o"
  store.game.cells[cellIndex] = player
  store.game.over = onWinGame()
  $(cell).text(player)
  const game = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: store.game.over
    }
  }
  api.playGame(game)
  .then(ui.onPlayGameSuccess)
  .catch(ui.onFailure)
turn = !turn
return turn
}
// All the different ways you can win the game
const onWinGame = function () {
  const cells = store.game.cells
  const player = turn ? 'x' : 'o'
  if (cells[0] === cells[1] && cells[0] === cells[2] && cells[0] !== '') {
    store.winner = player
    return true
  }
  if (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] !== '') {
     store.winner = player
     return true
   }
  if (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] !== '') {
      store.winner = player
      return true
    }
  if (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] !== '') {
    store.winner = player
    return true
    }
  if (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] !== ''){
    store.winner = player
  return true
  }
 if (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] !== '') {
   store.winner = player
   return true
 }
  if (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] !== '') {
    store.winner = player
    return true
  }
  if (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] !== '') {
    store.winner = player
    return true
  }
  if (cells.every(cell => cell !== '')) {
    store.tied = true
    return true
}

  // if statement logic for a tie; would it be if all cells are full there is no winner its a tie or if store.game.over and there is no winner then it is a tie
  // if ()

// how do I send a message of if you won or tied?
  return false
}



//$(cell).text('')
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onPlayGame
  // onGameBoardClick
  //onRestartGame
}
