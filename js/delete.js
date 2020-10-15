/**
 * @author Shivam Tomar
 */
var Twit = require('twit');
var config = require('../config.js');

var twitter = new Twit(config);

const deleteTwitter = (id) => {
    return new Promise((resolutionFunc, rejectionFunc) => {
        if(id){
            twitter.post('statuses/destroy/:id',
                {id: id},
                (error, data, response) => {
                    if(error || !response){
                        console.log('Error deleting tweet');
                        rejectionFunc(error);
                    }
                    else{
                        console.log(`Tweet deletion response: ${response}`);
                        resolutionFunc(response);
                    }
                }
            );
        }
        else{
            console.log('Twitter delete: Invalid Twitter id');
            rejectionFunc();
        }
    });
};

module.exports = deleteTwitter;