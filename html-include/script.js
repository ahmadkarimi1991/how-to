function includeHTML() {
    const all = document.querySelectorAll('[data-include]');
    all.forEach(function(element) {
        const path = element.getAttribute('data-include');
        if (path) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    } else if (this.status == 404) {
                        element.innerHTML = 'Page not found.';
                    } else {
                        element.innerHTML = 'Something else happened.';
                    }
                }
            };
            xhttp.open('GET', path, true);
            xhttp.send();
        }
    });
}


includeHTML();
