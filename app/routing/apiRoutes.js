const FriendsList = require("../data/friends");

const friendsList = new FriendsList();

friendsList.addFriend('jeff', 'link', [
    3,
    4,
    5
])


console.log(JSON.stringify(friendsList))