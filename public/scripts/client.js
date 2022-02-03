$(document).ready(function() {

  //method to avoide XSS attack
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(data) {
    
    const $tweet = `
    <article id="tweet-container">
    <header>
      <div id="name-image">
        <img src=${data.user.avatars}>
        <span>${data.user.name}</span>
        </div>
        <div>${data.user.handle}</div>
      </header>
        <p class="tweet-body">${data.content.text}</p>
      <footer>
        <span>${timeago.format(data.created_at)}</span>
        <icons class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </icons>
      </footer>
      </article>  
    `;
    $('#tweets').prepend($tweet);
  };


  const renderTweets = function(tweets) {

    for (const tweet of tweets) {
      createTweetElement(tweet);
    }
  };

  // submit a form
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();

    const tweet = $(this).serialize();
    console.log(tweet.length);
    const tweetLength = tweet.length - 5;

    if (tweetLength > 140) {
      return $(".error").html(`<p>⚠️ Characters limit exceeded!</p>`).slideDown("slow");
    } else if (tweetLength === 0) {
      return $(".error").html(`<p>⚠️ Tweet can not be empty!</p>`).slideDown("slow");
    }


    $.post("/tweets", tweet).then(() => loadTweets());

    // Reset new-tweet section
    $('#tweet-text').val("");
    $(".counter").val("140");
    $("#tweet-text").css("height", "40px");


  });
  const loadTweets = () => {
    $.get("/tweets", (tweets) => {
      renderTweets(tweets);
    });
  };
  loadTweets();

  $(".error").hide();
  $("#tweet-text").on("input", function() {
    $(".error").hide();
  });

});


