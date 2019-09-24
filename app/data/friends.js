const FriendList = function () {
    this.friends = [];

    //returns the best friend for the added friend
    this.addFriend = function (name, photo, scores) {

        //disgusting big O. could insert using quicksort on the scores property of friend
        //but thinking about the implementation of that right now makes my brain hurt
        const newFriend = new Friend(name, photo, scores)
        let bestDiff = 0;
        let bestFriend = {};
        this.friends.forEach(function (friend, i) {
            let diff = 0;
            friend.scores.forEach(function (score, i) {
                diff += Math.abs(score - newFriend.scores[i]);
            })
            if (i === 0 || diff < bestDiff) {
                bestDiff = diff;
                bestFriend = friend;
            }
        });
        this.friends.push(newFriend);

        return bestFriend;

    }
}

const Friend = function (name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
}



module.exports = FriendList;