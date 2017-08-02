/*
This is a code when we click the first submit and convert from datetime with this format
yyyy-mm-dd hh:mm:ss to timestamp.

*/

document.getElementById("dtstamp").onclick = function(){
var textAnswer = document.getElementById("date");
var myDate=textAnswer.value;
var match = myDate.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/)
var date = new Date(match[1], match[2] - 1, match[3], match[4], match[5], match[6]);
var date_to_timestamp = date.getTime() / 1000;
document.getElementById("demo").innerHTML = date_to_timestamp;
};
/* 
When we fire the submit button we convert the timestamp as a number to date time format
*/
document.getElementById("timestamp_button").onclick = function(){
var timestamp_answer = document.getElementById("timestamp");
var utcSeconds = timestamp_answer.value;
var time_to_date = new Date(0); 
time_to_date.setUTCSeconds(utcSeconds);
document.getElementById("timestamp_to_date").innerHTML = time_to_date;
}


