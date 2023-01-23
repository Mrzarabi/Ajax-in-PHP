function search_input(input) {

    if(input.lenght == '') {
        document.getElementById('myP').innerHTML = '';
    }
        let xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {
            if(xmlHttp.status == 200 && xmlHttp.readyState == 4) {
                document.getElementById('myP').innerHTML = xmlHttp.responseText; 
            }
        }

        xmlHttp.open('GET', 'search.php?search=' + input, true)

        xmlHttp.send()
    
}