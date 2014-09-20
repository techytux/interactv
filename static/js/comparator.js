window.stuff = null;
(function() {
    var timecodeData = null;
    var lastTimecodeData = null;
    var guitarAlert = null,
        drumAlert = null,
        handsAlert = null,
        clapAlert = null;
    var points = 0;
    var mplayer = videojs('example_video_1');
    $.getJSON( "static/timecode.json", function(data) {
        timecodeData = data.timecode;
        lastTimecodeData = timecodeData['0'];
        console.log("ef");
    })
    

    // Enable pusher logging - don't include this in production
    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        //window.console.log(message);
      }
    };

    
    var pusher = new Pusher('d82660399feaf7417ab5');
    var channel = pusher.subscribe('interactv');
    channel.bind('gesture_recognized', function(data) {
        console.log(data);
        var gesture_data = data;
        guitarAlert = gesture_data.guitar;
        drumAlert = gesture_data.drums;
        clapAlert = gesture_data.clap;
        handsAlert = gesture_data.hands;

    });
    var alertText = {
            'guitar' : 'Play Guitar !', 
            'hands': 'Raise your hands !',
            'clap': 'Clap your hands !',
            'drums': 'Play the drums !'
        }

    var comparator = setInterval(function () {timeComparator()}, 1000);
    var timeComparator = function () {
        time_counter = Math.floor(mplayer.currentTime());
        console.log("vcurrent time "+ time_counter)
        if (timecodeData.hasOwnProperty(time_counter) ) {
            lastTimecodeData = timecodeData[time_counter];
        }
        var alertString = '';
        for (var action in lastTimecodeData) {
            if(lastTimecodeData.hasOwnProperty(action)) {
                if(lastTimecodeData[action] == 1) {
                    alertString += ' ' + alertText[action];
                }
            }
        }
        if (guitarAlert > 0 && lastTimecodeData.guitar == 1) {
            points = points + 1;
        }
        if (drumAlert > 0 && lastTimecodeData.drums == 1) {
            points = points + 1;
        }
        if (clapAlert > 0 && lastTimecodeData.clap == 1) {
            points = points + 1;
        }
        if (handsAlert > 0 && lastTimecodeData.hands == 1) {
            points = points + 1;
        }
        
        $('#points').text(points);
        $('#steps').text(alertString);
        console.log(points);
    }

})();