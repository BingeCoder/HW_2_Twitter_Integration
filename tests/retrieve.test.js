/**
 * @author Anupama Kurudi
 */

const twit = require('twit');
const retrieve_tweet = require('../js/retrieve');


// This is a test to see if a fake tweeter handle is passed then it should send back error 404(not found).
test('Tweet retrieval', (done) => {
    const TwitterHandle = '@Anupamakn';   //Account does not exist         
    retrieve_tweet(TwitterHandle).then((response)=>{                
        throw new Error('This is is not a valid Twitter Handle');
    },(error)=>{            
        expect(error.statusCode).toBe(404);
        done();        
    });    
});
