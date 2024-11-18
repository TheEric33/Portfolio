var music = document.getElementById('audio');
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');
var prevButton = document.getElementById('presong');
var nextButton = document.getElementById('postsong');
var song = document.getElementById('name');
var i1 = document.getElementById('img1');
var i2 = document.getElementById('img2');
var i3 = document.getElementById('img3');
var i4 = document.getElementById('img4');
var i5 = document.getElementById('img5');
var count = 1;

playButton.addEventListener('click', () => {

    music.play();

});

pauseButton.addEventListener('click', () => {

    music.pause();

});

stopButton.addEventListener('click', () => {

    music.pause();
    music.currentTime = 0;

});

nextButton.addEventListener('click', () => {

    music.pause();
    music.currentTime = 0;

    if (count < 5){

        count = count +1;

    }else{

        count = 1;

    }

    if (count == 1){

        music = document.getElementById('audio');
        song.innerHTML = "Bon Jovi - You Give Love a Bad Name";

        i1.style.display = 'inline';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 2){

        music = document.getElementById('audio2');
        song.innerHTML = "Avicii - Wake Me Up";

        i1.style.display = 'none';
        i2.style.display = 'inline';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 3){

        music = document.getElementById('audio3');
        song.innerHTML = "Alan Walker - All Falls Down";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'inline';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 4){

        music = document.getElementById('audio4');
        song.innerHTML = "Imagine Dragons - Demons";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'inline';
        i5.style.display = 'none';

    }else {

        music = document.getElementById('audio5');
        song.innerText = "Nea - Some Say";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'inline';

    }

    music.play();

});

prevButton.addEventListener('click', () => {

    music.pause();
    music.currentTime = 0;

    if (count > 1){

        count = count -1;

    }else{

        count = 5;

    }

    if (count == 1){

        music = document.getElementById('audio');
        song.innerHTML = "Bon Jovi - You Give Love a Bad Name";

        i1.style.display = 'inline';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 2){

        music = document.getElementById('audio2');
        song.innerHTML = "Avicii - Wake Me Up";

        i1.style.display = 'none';
        i2.style.display = 'inline';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 3){

        music = document.getElementById('audio3');
        song.innerHTML = "Alan Walker - All Falls Down";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'inline';
        i4.style.display = 'none';
        i5.style.display = 'none';

    }else if (count == 4){

        music = document.getElementById('audio4');
        song.innerHTML = "Imagine Dragons - Demons";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'inline';
        i5.style.display = 'none';

    }else {

        music = document.getElementById('audio5');
        song.innerText = "Nea - Some Say";

        i1.style.display = 'none';
        i2.style.display = 'none';
        i3.style.display = 'none';
        i4.style.display = 'none';
        i5.style.display = 'inline';

    }

    music.play();

});

