window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-24QVB7QXR1');

function openCity(evt, cityName) {
    //var i, tabcontent, tablinks;
    //tabcontent = document.getElementsByClassName("tabcontent");
    //for (i = 0; i < tabcontent.length; i++) {
    //  tabcontent[i].style.display = "none";
    //}
    //tablinks = document.getElementsByClassName("tablinks");
    //for (i = 0; i < tablinks.length; i++) {
    //  tablinks[i].className = tablinks[i].className.replace(" active", "");
    //}
    //document.getElementById(cityName).style.display = "block";
    //evt.currentTarget.className += " active";
    
    if (!window.location.pathname.startsWith("content_pages")) {
        window.location.href = "/content_pages/" + cityName;
    } else {
        window.location.href = "/cityName";
    }
}

function jef() {
    var element = document.body;
     element.classList.toggle("dark-mode");
}

function bo() {
    document.getElementById('jeff').style.color = 'black';
    document.getElementById('jeff').style.backgroundColor = 'white';
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.startsWith("content_pages")) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
                const pathname = window.location.pathname;

                const pathWithoutSlash = pathname.substring(pathname.lastIndexOf('/') + 1);
                const filenameWithoutExtension = pathWithoutSlash.replace(/\.html$/, '');
                const formattedPath = filenameWithoutExtension.replace(/_/g, ' ');

                const capitalizedPath = formattedPath.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }).join(' ');

                document.getElementById('header-title').innerHTML = capitalizedPath;
                console.log(capitalizedPath);
            })
        .catch(error => console.error('Error loading the header:', error));
    } else {
        fetch('../header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-container').innerHTML = data;
                const pathname = window.location.pathname;

                const pathWithoutSlash = pathname.substring(pathname.lastIndexOf('/') + 1);
                const filenameWithoutExtension = pathWithoutSlash.replace(/\.html$/, '');
                const formattedPath = filenameWithoutExtension.replace(/_/g, ' ');

                const capitalizedPath = formattedPath.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }).join(' ');

                document.getElementById('header-title').innerHTML = capitalizedPath;
                console.log(capitalizedPath);
            })
        .catch(error => console.error('Error loading the header:', error));
    }
});