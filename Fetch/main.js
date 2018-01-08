var fetch = require('node-fetch');

function plainFetch() {
  // this fetch grabs the boulder sub reddit
  fetch('https://www.reddit.com/r/boulder.json').then(function(response) {
    // the json method on the response object also returns a promise
    return response.json();
  }).then(function(json) {
    // so any additional json processing must happen in another then
    console.log(json.data.children[1]);
  });
}

plainFetch();

async function asyncFetch(){
  let response = await fetch('https://www.reddit.com/r/boulder.json')
  let json = await response.json()
  console.log(json.data.children[0]);

}



// How can we use async / await to rewrite the function above?
