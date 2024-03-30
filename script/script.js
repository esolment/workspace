setTimeout(function(){
    document.location.href = '#preloader';
    pra.play();
}, 1);

setTimeout(function(){
    document.location.href = '#';
    pha.play();
    document.getElementById("ph-text-div").innerHTML = "<p class='ph-text'>Solment Studio</p>";
}, 2600);
setTimeout(function(){
    document.getElementById("container-list-super").innerHTML = "<div id='list-super-a'></div>";
}, 4800);
setTimeout(function(){
    document.getElementById("container-list-super").innerHTML = "<div id='list-super-c'></div>"
}, 9000);