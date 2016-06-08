<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>js test page</title>
    <link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">
    <script src="js/general.js"></script>
    <?php if (isset($_GET['s'])) { ?>
        <script src="js/<?php echo trim($_GET['s']); ?>.js"></script>
    <?php } ?>

    <style>
        body { padding: 3em 5em;}
        ul li { line-height: 1.5em;}
    </style>
</head>
<body>
<h2>List of scripts</h2>
<ul>
<?php
if ($handle = opendir('js')) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && $entry != "general.js") {
            $file = explode(".",$entry); ?>
    <li><a href="index.php?s=<?php echo $file[0];?>"><?php echo $entry;?></a></li>
<? }} closedir($handle);} ?>
</ul>
</body>
</html>
