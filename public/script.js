/*
 @author Gunjan Srivastava
 */
(function () {
  const postTweetBtn = $("#postTweetBtn");
  const postMessage = $("#postMessage");
  const responseMsg = $("#responseMsg");
  postTweetBtn.click(postTweetHandler);
  /*
    Post a tweet on the twitter wall
    Retrieve message from {postMessage} constant
     */
  function postTweetHandler() {
    const message = postMessage.val();
    fetch("/post", {
      method: "post",
      body: JSON.stringify({ status: message }),
      headers: {
        "content-type": "application/json",
      },
    }).then(function (response) {      
      if (response.status == 200) {
        responseMsg.text("Post Tweeted Successfully");
      } else {
        responseMsg.text("Error occurred:" + response.statusText);
      }
    });
  }

  var retrievedTweets;
  /*
 @author Anupama Kurudi
 */
  const getTweetBtn = $("#getTweetBtn");
  getTweetBtn.click(getTweetsHandler);
  function getTweetsHandler() {
    fetch("/get")
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        retrievedTweets = data;
        let userHTML = `<h3>User Meta</h3><img src="${data[0].profile_image_url}"/><p><strong>Name:</strong> ${data[0].name} <strong>Twitter Handle: ${data[0].screen_name}</strong></p>`;
        let html = "<h3>Tweets</h3>";
        for (let tweet of data) {
          html += `<p><strong>Tweet:</strong> ${tweet.text} <strong>Created At</strong>:${tweet.created_at}</p>`;
        }
        $("#username").html(userHTML)
        $("#tweets").html(html);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Deletion of Tweet
  /**
   * @author Shivam Tomar
   */
  const deleteTweetBtn = $("#deleteTweetBtn");
  const deleteClickHandler = () => {
    console.log(JSON.stringify(retrievedTweets));
    fetch("/delete/1", {
      method: "delete"    
    })
    .then((response) => {
      if(response && response == 200){        
        alert("Oldest Tweet delete success.");
      }
      else {
        alert("Oldest Tweet delete failure.");
      }
    });
  };
  deleteTweetBtn.click(deleteClickHandler);
})();
