<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>js test page</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <?php
        include('lib/mocha_head.php');
        include('lib/chai.php');
    ?>
</head>
<body>
<h2>Task 1</h2>

<div id="console1"></div>


<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="js/vendor/underscore-min.js"></script>
<script src="js/general.js"></script>
<script src="js/simple3.js"></script>
<?php include('lib/mocha_bottom.php'); ?>

</body>
</html>
