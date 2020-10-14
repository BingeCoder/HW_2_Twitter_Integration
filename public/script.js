/*
 @author Gunjan Srivastava
 */
(function(){
    const postTweetBtn = $('#postTweetBtn');
    const postMessage = $('#postMessage');
    const responseMsg = $('#responseMsg');
    postTweetBtn.click(postTweetHandler)
    /*
    Post a tweet on the twitter wall
    Retrieve message from {postMessage} constant
     */
    function postTweetHandler(){
        const message = postMessage.val();
        fetch('/post' , {
            method : 'post',
            body : JSON.stringify({status:message}),
            headers: {
            'content-type': 'application/json'
        }
        }).then(function(response){
            if(response.status == 200){
                responseMsg.text('Post Tweeted Successfully');
            }
            else{
                responseMsg.text('Error occurred:'+response.statusText);
            }
        });
    }
})();