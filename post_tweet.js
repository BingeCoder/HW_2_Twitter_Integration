const express = require('express')
const app = express()
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var tweet = {
    status: 'Happy Birthday' }

app.post('/create', function (req, res) {

    T.post('statuses/update', tweet, function tweeted(err, data, response){
        if(err){
            console.log("Something went wrong!");
            res.send(err.toString())
        }
        else{
            res.send("Message posted successfully")
            console.log("Successfully posted");
        }
    })
})

app.listen(3000)