# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh
# sh curl-scripts/auth/sign-up.sh
curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{}'

echo


# I need to switch this up by looking at the patch option on the api page and then add this to my api calls. I need to double check my structure for this. This is just the template from my post script for create-game.

# when updating a game, the api needs to know which "box"/"div" the user clicked on in the game board. Each box has an index from 0-8 starting with 0 in the TOP LEFT and 8 in the BOTTOM RIGHT.

# You may want to store the cell index on the HTML element that represents this box. For this, consider utilizing data-* attributes. For example, below the HTML div element is storing a custom data attribute called data-cell-index to identify the box's index as 0. You could later utilize the jQuery .data method to retrive this information from the DOM when the user clicks on the box.
# <div data-cell-index='0'>
# </div>
