<<<<<<< HEAD

function search_input(input) {

    if(input.lenght == '') {
        document.getElementById('myP').innerHTML = '';
        return;
    }

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            document.getElementById('myP').innerHTML = xmlHttp.responseText; 
        }
    }

    xmlHttp.open('GET', 'search.php?search=' + input, true);
    
    xmlHttp.send()
=======
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
>>>>>>> ce39094ddaa88f8aca5741f9f00c96e1e68f7ee3
}