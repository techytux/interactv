window.stuff = null;
(function() {
    var counter = 0;
    var timecodeData = null;
    var lastTimecodeData = null;
    var guitarAlert = null,
        drumAlert = null,
        handsAlert = null,
        clapAlert = null;
    var points = 0;

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

    var comparator = setInterval(function () {timeComparator()}, 1000);
    var timeComparator = function () {
        if (timecodeData.hasOwnProperty(counter) ) {
            lastTimecodeData = timecodeData[counter];
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
        //console.log(counter);
        

        counter = counter + 1;
        $('#points').text(points);
        console.log(points);
    }

})();