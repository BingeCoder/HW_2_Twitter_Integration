const deleteTweet = require('./js/delete');
const express = require('express');
const app = express();


app.delete('/delete/:id', (req, res) => {
    console.log(`The deletion twitter id is: ${req.params.id}`);
    const promise = deleteTweet(req.param.id);
    promise.then((response)=>{
        res.sendStatus(response.statusCode);
    },(error)=>{
        res.send(error.body);
    });
});

var server = app.listen(3000, ()=>{
    console.log(`Server is listening at port, ${server.address().port}`);
});