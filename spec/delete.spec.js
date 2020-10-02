//author Shivam Tomar

var deleteTweet = require('./../js/delete');

describe('delete tweet', () => {
    it('should return 200 on deleting tweet', (done) => {
        const promise = deleteTweet('');
        promise.then((response)=>{
        expect(res.statusCode).toEqual(200);
        done();
    },(error)=>{
        expect(error).toBeFalse();
        done();
    });
    });
});
