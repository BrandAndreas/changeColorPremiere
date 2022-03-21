function selectedClips(sequence) {
    
    function getAllVideoClips(sequence) {
        var allVideoTracks = sequence.videoTracks;
        var allClips = [];
        for(var i=0; i<allVideoTracks.length; i++) {
            allClips.push(allVideoTracks[i].clips);
        }
        return allClips;
    }

    function getSelectedVideoClipsOfTrack(allClipsOfTrack) {
        var allSelectedClips = [];
        for (var i = 0; i<allClipsOfTrack.length; i++) {
            if(allClipsOfTrack[i].isSelected()) {
                allSelectedClips.push(allClipsOfTrack[i]);
            }
        }
        return allSelectedClips;
    }



    var allClips = getAllVideoClips(sequence);
    var allSelectedClips = [];

    for(var i=0; i<allClips.length; i++) {
        allSelectedClips.push(getSelectedVideoClipsOfTrack(allClips[i]));
    }

    return allSelectedClips;

}

var seq = app.project.activeSequence;
var allSelectedClips = selectedClips(seq);

alert(allSelectedClips[2].length.toString());