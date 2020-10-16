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
    const promise = postTweet(req.body);
    promise.then((response)=>{
        res.status(200).send(response);
    },(error)=>{
        res.send(error.body);
    });
});

/**
 * @author Shivam Tomar
 */
app.delete('/delete/:id', (req, res) => {    
    console.log("----app.delete "+ req.params.id);
    const promise = deleteTweet(req.params.id);
    promise.then((response)=>{
        res.status(200).send(response);
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

app.listen(3000, () => {
    console.log('Listening at port 3000');
});