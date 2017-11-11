// Jan 1st 1970 00:00:00 UTC

var moment = require('moment');

var createdAt = 1234;
var date = new moment(createdAt);
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
console.log(date.format('h:mm a'));
