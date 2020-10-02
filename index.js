
var Twit = require('twit');
var opts = require('./config');
const fetchTimeline = require('fetch-timeline');
 
const params = {
  screenName: 'GunjanS40215131'
}

const stream = fetchTimeline(params, opts) // => Readable Stream


stream.on('data', (tweet, index) => {
  console.log(`${tweet.text}`)
  container.innerHTML = '${tweet.text}';
})

