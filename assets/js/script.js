
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
}