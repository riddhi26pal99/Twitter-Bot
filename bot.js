console.log('bot is starting');

//import statemnt

var Twit = require('twit');

// twit object // secret code values of a particular account
var T = new Twit({
    consumer_key:         'AlC9GJ2Q0OfzjpNxelpwZrYVv',
    consumer_secret:      'fmHnDweNCg0jMZowbwlwlsUHpdlMoGFF9g6VO4RikIKcPvqOB0',
    access_token:         '1158995889429463040-pibDLU9MGxyuCZJaqq715ic5l9pMUx',
    access_token_secret:  'an2NpbayELKGh2TpSRy3DOSi0fUF2qs6xlhJQVwrLCX6p',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
})



 /*

 // getting tweets

 var params = { 
    q: 'banana since:2011-07-11', 
    count: 5,
    lang: 'en'
 }

 T.get('search/tweets', params , gotData)

 function gotData(err, data, response)
 {
    var tweets = data.statuses;
    for(var i = 0; i< tweets.length; i++)
    console.log(tweets[i].text)
  }

*/

// posting tweet

TweetIt(); 

setInterval(TweetIt, 1000*20);

function TweetIt(){

    var r = Math.floor(Math.random()*100);
    var tweet = {  
        status: `here is a random nymber ${r} #tweetingfromnode` 
    };

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) 
    {
        if (err){
            console.log('Something went wrong!');
    }
        else{
            console.log('It worked!');

    }
    
    }
}

   