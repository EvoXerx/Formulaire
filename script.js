document.addEventListener('DOMContentLoaded', function() {
    const backgroundButton = document.createElement('button');
    backgroundButton.innerText = 'on/off';
    let backgroundOn = false;
    backgroundButton.addEventListener('click', function() {
        if (backgroundOn) {
            document.body.style.backgroundImage = 'none';
        } else {
            document.body.style.backgroundImage = 'url("https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/culture/que-vaut-le-film-dhorreur-ca-3440576/44245841-1-fre-FR/Que-vaut-le-film-d-horreur-Ca.jpg")';
        }
        backgroundOn = !backgroundOn;
    });
    document.body.appendChild(backgroundButton);
});