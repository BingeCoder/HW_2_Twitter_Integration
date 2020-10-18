/**
 * @author Shivam Tomar
 */

const twit = require('twit');
const tweetDelete = require('../js/delete');


// This test is based on negative approach. If fake tweet id is passed then it should send back error 404(not found).
test('Tweet deletion', (done) => {
    const fakeTweetId = '1';            
    tweetDelete(fakeTweetId).then((response)=>{                
        throw new Error('This is negative test and expected to fail!!');
    },(error)=>{            
        expect(error.statusCode).toBe(404);
        done();        
    });    
});
