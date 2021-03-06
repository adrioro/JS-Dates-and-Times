//NOTE: Based on the local time of the user's computer.//

var date = new Date(); // Tue Jan 15 2019 11:53:39 GMT-0500 (Eastern Standard Time)"

date.getTime()
//1547574667514

date.getDate()
//15

date.getMonth()
//0

date.getMinutes()
//51

date.getMilliseconds()
//514

//INTERVALS//

//setInterval(function(){ alert("Hello"); }, 3000);//


var getTime = function() {
    console.log(new Date().getTime());
  },

  interval = setInterval(getTime, 3000);

//OR


var interval = setInterval(function() {
    console.log(new Date().getTime());
  },
  3000)


//Another example of interval//
/*setInterval: Same as setTimeout(), but repeats
the execution of the function continuously.*/

var x = 1;
var interval = setInterval(function() {
    if (x === 3) {
      clearInterval(interval);
    }
    console.log("This is an interval # " + x++);
  },
  1000)

//setTimeout: Executes a function, after waiting a specified number of milliseconds.
var x = 1;
setTimeout = setTimeout(function() {
    console.log("This interval will be displayed after 3000 miliseconds. Only once.");
  },
  3000)