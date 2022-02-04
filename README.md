# Tweeter

Tweeter is a single-page microblogging app that allows you to share your thoughts in 140 chracters or less.

I built this app using HTML, CSS, JavaScript, jQuery and AJAX to render tweets on the front end. On the back end, I used Node and Express to run the server and handle the tweet database.


## Final Product

Home Page Desktop Version
!["Screenshot of Home Page Desktop version"](https://github.com/AliHashemi86/tweeter/blob/master/docs/Home-desktop.png)

Home Page Tablet Version
!["Screenshot of Home Page Tablet version"](https://github.com/AliHashemi86/tweeter/blob/master/docs/Home-Tablet.png)

Alert for empty tweet
!["Screenshot of Alert"](https://github.com/AliHashemi86/tweeter/blob/master/docs/Alert-empty-tweet.png)

Alert for more than 140 characters tweet
!["Screenshot of Alert"](https://github.com/AliHashemi86/tweeter/blob/master/docs/Alert-max-character.png)



## Getting Started

Fork or clone this repository to get the files.
Install dependencies using the npm install command or npm i for short.
Start the web server using the npm run local command to start nodemon. Alternatively, npm start will start the server without nodemon.
Go to http://localhost:8080/ in your browser.
Click the 'Write a Tweet' button to access the new tweet area.
Start tweeting!


## Dependencies

Express
Node 5.10.x or above
Body Parser
Chance
md5
Timeago js


## Development Dependencies

nodemon


## Features

1. Allows users to send and view tweets.
2. New tweets section can be toggled to open and close with a smooth animation.
3. Tweeter is responsive to mobile, tablet, and desktop.
4. Performs error validation to determine if tweet is over 140 characters or if tweet is empty.
5. Smooth animations and buttons

