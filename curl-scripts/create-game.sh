# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
#  EMAIL="t@t.com" PASSWORD="t" USERNAME="tdubs"sh curl-scripts/auth/sign-up.sh
# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{}'

echo


#token creates the game for the signed in person. The empty object is my game board.
