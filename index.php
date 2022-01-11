<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <html>
    <meta property="og:site_name" content="Break Free" />
    <meta property="og:image" content="img/latag.jpg" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/breakfreeBS.css">
    <link rel="stylesheet" href="css/breakfreeStyle.css">
    <link rel="stylesheet" href="css/animateStyle.css">
    <link rel="stylesheet" href="css/awesome.css">
    <script src="js/fontC.js"></script>

    <title>BreakFree</title>
</head>

<body>
    <div class="background bg1" id="bgBody">
        <audio src="music/music_bg_breakfree.mp3" id="music_bg"></audio>
        <audio id="sfx_case"></audio>
        <button class="custom_btn align_bottom_btn_two" id="enter_breakFree">ENTER</button>
        

        <div class="sound_icon position-absolute" id="sound_activate">
            <i class="fad fa-volume-mute vol" id="vol_mute"></i>
            <i class="fad fa-volume vol d-none" id="vol"></i>
        </div>
        <?php include 'pages/mechanics_game.php' ?>
        <?php include 'pages/play_btn_landing.php' ?>
        <?php include 'pages/choose_a_room.php' ?>
        <?php include 'pages/crime_detective.php' ?>
        <?php include 'pages/open_house.php' ?>
        <?php include 'pages/driving_frenzy.php' ?>
        <?php include 'pages/the_bartender.php' ?>
        <?php include 'pages/class_dismissed.php' ?>
        <?php include 'pages/animal_lover.php' ?>
        <?php include 'pages/picture_perfect.php' ?>
        <?php include 'pages/the_labyrinth.php' ?>
        <?php include 'pages/bonus_page.php' ?>
        <?php include 'pages/bonus2_page.php' ?>
        <?php include 'pages/thank_you_page.php' ?>
    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/breakfreeJS.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>