let navig;

window.onload = function(){
    navig = document.getElementById('nav');
    navig.innerHTML += '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">\n' +
        '                  <div class="container-fluid">\n' +
        '                    <a class="navbar-brand" href="#">Sara Girard</a>\n' +
        '                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '                      <span class="navbar-toggler-icon"></span>\n' +
        '                    </button>\n' +
        '                    <div class="collapse navbar-collapse" id="navbarColor01">\n' +
        '                      <ul class="navbar-nav me-auto">\n' +
        '                        <li class="nav-item">\n' +
        '                          <a class="nav-link" href="./index.html">Home\n' +
        '                          </a>\n' +
        '                        </li>\n' +
        '                        <li class="nav-item">\n' +
        '                          <a class="nav-link" href="./resume.html">Resume</a>\n' +
        '                        </li>\n' +
        '                        <li class="nav-item">\n' +
        '                          <a class="nav-link" href="./portfolio.html">Portfolio</a>\n' +
        '                        </li>\n' +
        '                      </ul>\n' +
        '                    </div>\n' +
        '                  </div>\n' +
        '</nav>';

}