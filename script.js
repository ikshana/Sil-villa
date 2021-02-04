function openSlideMenu() {
    document.getElementById('menu').style.width = '300px';

}

function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
}

function loadVideo(source) {

    document.getElementById("videoChange").src = source;
}