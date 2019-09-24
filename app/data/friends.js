const FriendList = function () {
    this.friends = [];
    this.addFriend = function (name, photo, scores) {
        const newFriend = new Friend(name, photo, scores)
        this.friends.add(newFriend);

    }
    function checkCompatibility(scores) {
        
    }


}

const Friend = function (name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.total = addScores(this.scores);


    function addScores(scoreArr) {
        let total = 0;
        scoreArr.forEach(score => {
            total += score;
        });
        return total;
    }
}

