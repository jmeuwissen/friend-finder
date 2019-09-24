module.exports = function (app) {


    app.get("/", function (req, res) {
        fs.readFile(__dirname + "/public/home.html", function (err, data) {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        })
    })


    app.get("/survey", function (req, res) {
        fs.readFile(__dirname + "/public/survey.html", function(err, data) {
            if (err) throw err;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);

        })
    })


}