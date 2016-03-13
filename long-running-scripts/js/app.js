 // function init() {

 //      var firstTimestamp = Date.now();
 //      console.log(firstTimestamp);

 //      var r = 1000;
 //      var c = 1000;
 //      var a = new Array(r);

 //      for (var i = 0; i < r; i++) {
 //          a[i] = new Array(c);

 //          for (var j = 0; j < c; j++) {
 //              a[i][j] = "[" + i + "," + j + "]";
 //              // console.log("a[i][j]");
 //              // console.log(a[i][j]);
 //          }
 //      }

 //      var lastTimestamp = Date.now();
 //      console.log(lastTimestamp);

 //      console.log("time elaspsed in milliseconds?? ");
 //      console.log(lastTimestamp - firstTimestamp);
 //  }


// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function init() {

//   for (var i=0; i<100; i++){
//     console.log(getRandomIntInclusive(1, 10));
//   }

// }


function init() {

  // https://primes.utm.edu/lists/small/1000.txt


  // A simple Linear Congruential Generator

  // Establish the parameters of the generator
  var m = 25,
      // a - 1 should be divisible by m's prime factors
      a = 11,
      // c and m should be co-prime
      c = 17;
  // Setting the seed
  var z = 3;

  // Establish the parameters of the generator
  // var m = 1000,
  //     // a - 1 should be divisible by m's prime factors
  //     a = 2001,
  //     // c and m should be co-prime
  //     c = 17;
  // // Setting the seed
  // var z = 3;



  var rand = function() {
    // define the recurrence relationship
    z = (a * z + c) % m;
    // return an integer
    // Could return a float in (0, 1) by dividing by m
    return z;
  };

  var message = "";

  for(i = 0; i < 51; i++) {
    message =  message + ", " + rand().toString();
  }
  console.log(message);

  // This is the full period of the generator.
  // 0 17 4 11 13 10 2 14 21 23 20 12 24 6 8 5 22 9 16 18 15 7 19 1 3 0
}


window.onload = init;




// long running computations with open source API's written in JavaScript

// programmable web

// Algorithmia





