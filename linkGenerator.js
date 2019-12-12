function input (form) {
	
    var Link = form.link.value;
    var LinkYTKey = Link.split('=')[1];
    var firstOption = "?";
    var nextOption = "&";
    var optionAutoplay = "";
    var optionLoop = "loop=1";
    var optionVideoinfo = "showinfo=0";
    var iframe = "<iframe width='560' height='315' src='https://www.youtube.com/embed/";
    var iframeoptions = "' frameborder='0' allowfullscreen></iframe>";
    
    if(document.getElementById("autoplay").checked) {optionAutoplay = "autoplay=1";} else {optionAutoplay = "autoplay=0";}
    if(document.getElementById("loop").checked) {optionLoop = "loop=1";} else {optionLoop = "loop=0";}
    if(document.getElementById("showinfo").checked) {optionVideoinfo = "showinfo=1";} else {optionVideoinfo = "showinfo=0";}
    if(document.getElementById("showvideos").checked) {optionRelatedVideo = "rel=1";} else {optionRelatedVideo = "showvideos=0";}
    if(document.getElementById("showcontrols").checked) {optionControls = "controls=1";} else {optionControls = "controls=0";}
    if(document.getElementById("modestbranding").checked) {optionModestbranding = "modestbranding=1";} else {optionModestbranding = "modestbranding=0";}
    if(document.getElementById("autohide").checked) {optionAutohide = "autohide=1";} else {optionAutohide = "autohide=0";}
    
    
    var text = iframe + LinkYTKey + firstOption + optionAutoplay + nextOption + optionLoop + nextOption + optionVideoinfo + nextOption + optionRelatedVideo + nextOption + optionControls + nextOption + optionModestbranding + nextOption + optionAutohide + iframeoptions;
    
    document.getElementById("output").innerText = text
    document.getElementById("outputvideo").innerHTML = text
   
}