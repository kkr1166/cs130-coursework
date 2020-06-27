const AudioPlayer = (selector, audioFile) => { 
    let audio;
    let playButton;
    let rwdButton;
    let ffwdButton;
    let sliderInput;
    let containerElement;

    const togglePlay = () => {
        if (audio.paused) {
            play();
        } else {
            pause();
        }
    }; 
 
    const play = () => {
        //////////////////
        /////////////////
        ////////////////
        for (let item of document.getElementsByClassName('track')) {
            item.pause();
        }
        for (let button of document.getElementsByClassName('play_pause')) {
            button.classList.remove('fa-play', 'fa-pause');
            button.classList.add('fa-play');
        }
        playButton.classList.remove('fa-play', 'fa-pause');
        jumpToTime();
        audio.play();
        playButton.classList.add('fa-pause');
    };

    const pause = () => {
        playButton.classList.remove('fa-play', 'fa-pause');
        jumpToTime();
        audio.pause();
        playButton.classList.add('fa-play');
    };

    const jumpToTime = () => {
        const progressController = containerElement.querySelector('.player-time');
        const timeElapsed = containerElement.querySelector('.time-elapsed');
        const timeTotal = containerElement.querySelector('.time-total');
        if (getDuration() === "NaN:0NaN") {
            console.log('returning...');
            return;
        }
        
        progressController.value = getSliderPosition();
        timeElapsed.innerHTML = getCurrentTime();
        timeTotal.innerHTML = getDuration();
    };

    const skipForward = () => {
        audio = containerElement.querySelector('.track');
        if (audio.currentTime < audio.duration) {
            audio.currentTime += audio.duration / 10;
        } else {
            audio.currentTime = audio.duration;
        }
    };

    const skipBackward = () => {
        if (audio.currentTime > 0) {
            audio.currentTime -= audio.duration / 10;
        } else {
            audio.currentTime = 0;
        }
    };

    const customTime = (ev) => {
        const newTime = audio.duration * parseInt(ev.target.value) / 100;
        audio.currentTime = parseInt(newTime) + 1;
        jumpToTime();
    };

    const getSliderPosition = () => {
        return parseInt(audio.currentTime / audio.duration * 100);
    };

    const getDuration = () => {
        return formatTime(audio.duration);
    };

    const getCurrentTime = () => {
        return formatTime(audio.currentTime);
    };

    const resetTime = () => {
        audio.currentTime = 0;
        playButton.classList.remove('fa-pause')
        playButton.classList.add('fa-play');
        jumpToTime();
    };

    const formatTime = (timeCount) => {
        var seconds = timeCount,
            minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    };
 
    const setAudioFile = (audio_url) => {
        audio.src = audio_url;
    };


    initialize = () => {
        // init DOM hooks:
        containerElement = document.querySelector(selector);
        console.log(containerElement);
        audio = containerElement.querySelector('.track');
        playButton = containerElement.querySelector('.play_pause');
        rwdButton = containerElement.querySelector('.rwd');
        ffwdButton = containerElement.querySelector('.ffwd');
        sliderInput = containerElement.querySelector('.player-time');

        console.log(audio, playButton);
        // attach events to event handlers (i.e. functions)
        audio.ontimeupdate = jumpToTime;
        audio.onended = resetTime;
        audio.onloadeddata = function() {
            console.log("preview loaded");

        };
        playButton.onclick = togglePlay;
        rwdButton.onclick = skipBackward;
        ffwdButton.onclick = skipForward;
        sliderInput.oninput = customTime;
        sliderInput.onchange = customTime;
    };
    initialize();
    if (audioFile) {
        setAudioFile(audioFile);
    }
};