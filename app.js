/*
 @author Gunjan Srivastava
 */
const express = require('express')
const bodyParser = require('body-parser');
const config = require('./config');
const deleteTweet = require('./js/delete');
const postTweet = require('./js/post');
const retrieveTweets = require('./js/retrieve');

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/post', function (req, res) {
    const promise = postTweet(req.body)
    promise.then((response)=>{
        res.send("Message posted successfully.");
    },(error)=>{
        res.send(error.body);
    });
});

/**
 * @author Shivam Tomar
 */
app.delete('/delete/:id', (req, res) => {
    console.log(`The deletion twitter id is: ${req.params.id}`);
    const promise = deleteTweet(req.param.id);
    promise.then((response)=>{
        res.sendStatus(response.statusCode);
    },(error)=>{
        res.send(error);
    });
});

app.get('/get', (req, res) => {
    retrieveTweets().then((response)=>{
        res.send(JSON.stringify(response));
    },(error)=>{
        res.statusCode = error.statusCode;
        res.send(JSON.stringify(error));
    }).catch(() => {
        res.send();
    });
});

var server = app.listen(3000);