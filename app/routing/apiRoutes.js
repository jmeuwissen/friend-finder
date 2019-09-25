const FriendsList = require("../data/friends");

const friendsList = new FriendsList();

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(
            friendsList.friends
        )

    })



    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        
        res.json(
            friendsList.addFriend(
                req.body.name,
                req.body.photo,
                req.body.scores
            )
        )
    })
}