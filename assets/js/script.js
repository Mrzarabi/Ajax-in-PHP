function live_search(value) {
    console.log(value.length);
    if(value.lenght == 0) {
        document.getElementById('show').innerHTML = '';
    }

    xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState = 4 && xmlHttp.status == '200') {
            document.getElementById('show').innerHTML = xmlHttp.responseText;
        }
    }

    xmlHttp.open('GET', 'search.php?search=' + value, true);

    xmlHttp.send();
}