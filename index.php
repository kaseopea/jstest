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

    <style>
        body { padding: 3em 5em;}
        ul li { line-height: 1.5em;}
    </style>
</head>
<body>
<h2>List of scripts</h2>
<ul id="scripts">
<?php
if ($handle = opendir('js')) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && $entry != "general.js") {
            $file = explode(".",$entry);?>
    <li><a href="index.php?s=<?php echo $file[0];?>"><?php echo $entry;?></a></li>
<? }} closedir($handle);} ?>
</ul>

<div style="font-size:10px">
  inner4
  <div style="font-size:25px">
    inner3
    <div style="font-size:50px">
      inner2
    </div>
  </div>
</div>

<script src="js/vendor/underscore-min.js"></script>
<script src="js/general.js"></script>
<?php if (isset($_GET['s'])) { ?>
    <script src="js/<?php echo trim($_GET['s']); ?>.js"></script>
<?php } ?>
<?php include('lib/mocha_bottom.php'); ?>

</body>
</html>
