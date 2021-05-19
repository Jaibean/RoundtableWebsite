//Main app JS code goes here


//*****Challenge Page code*****//

//dynamically load script tag into head tag based on option selected from dropdown
function selectChallenge() {
    var file = document.getElementById('options').value;
    var newScriptTag = document.createElement('script');

    for (i=0; i < file.length; i++) {
        if (file[i] > 1) {
    newScriptTag.src = `scripts/${file}.js`;
    document.head.appendChild(newScriptTag);
        }
    }
}

function clearResult() {
    document.getElementById("result-box").innerHTML = '';
    document.getElementById('options').value = "-- Select Date --";
}

