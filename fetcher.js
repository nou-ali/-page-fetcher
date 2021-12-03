// Install and use the request library to make the HTTP request
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions
const request = require('request'); //Request is designed to be the simplest way possible to make http calls.
const fs = require('fs'); //The Node. js file system module allows you to work with the file system on your computer.

//http request

request('http://www.example.edu', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the example.edu homepage.

  fs.writeFile('/vagrant/w2/d3/page-fetcher/index.html', body, error => {
    if (error) {
      console.log(error);
      return;
    }
    //file written successfully

    const stats = fs.statSync("/vagrant/w2/d3/page-fetcher/index.html");
    console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);

  });
});





