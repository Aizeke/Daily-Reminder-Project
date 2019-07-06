
var twitterURL = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2'

axios.get(twitterURL)
.then(function(response){
    console.log(response)
})