
<?php
$date = '
<div class = "fromdatetimetotimestamp">
<p>From Datetime to timestamp:</p>
<div class="">
<label>Put your date here:</label>
<input type="text" name="date" id="date">
<button id="dtstamp">Submit</button>
</div>
<div class = "answer">
<label>Your answer is :</label>
<label id="demo"></label>
</div>
<div class ="from_timestamp_to_date">
<p>From Timestamp to Datetime</p>
<label>Your timestamp is : </label>
<input type="text" name="timestamp" id="timestamp">
<button id = "timestamp_button">Submit</button>
<div class="">
<label>Your answer is:</label>
<label id="timestamp_to_date"></label>
</div>
<script src = "index.js" type="text/javascript"></script>
';
echo $date;