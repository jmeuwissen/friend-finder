const FriendsList = require("../data/friends");

const friendsList = new FriendsList();

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(
            JSON.stringify(friendsList)
        )

    })



    app.post("/api/friends", function (req, res) {
        res.json(
            JSON.stringify(
                friendsList.addFriend(
                    req.body.name,
                    req.body.photo,
                    req.body.scores
                )
            )
        )
    })
}
