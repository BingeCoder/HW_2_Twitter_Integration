//@Author - Anupama Kurudi
var Twit = require("twit");
var config = require("../config.js");
var twitter = new Twit(config);

const retrieveTweets = () => {
  return new Promise((resolve, reject) => {
    twitter.get("statuses/user_timeline", (error, data, response) => {
      if (error) {
        console.log("Error fetching tweets");
        reject(error);
      } else {
        let results = [];
        for(let tweets of data) {
          let {text, created_at} = tweets;
          let {name, screen_name, profile_image_url} = tweets.user;
          results.push({
            text,
            created_at,
            name,
            screen_name,
            profile_image_url
          })
        }
        resolve(results);
      }
    });
  });
};

module.exports = retrieveTweets;