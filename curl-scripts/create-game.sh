# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
#  EMAIL="t@t.com" PASSWORD="t" USERNAME="tdubs"sh curl-scripts/auth/sign-up.sh
# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-development.herokuapp.com/create-game" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {

    }
  }'

echo
