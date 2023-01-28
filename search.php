<?php

$names = ['hadi', 'amo hadi', 'ali'];


$search_name = $_GET['search'];

$find = '';

if(strlen($search_name) > 0) {

    foreach ($names as $name) {
        if(strtolower($search_name) == strtolower(substr($name, 0, strlen($search_name)))) {
            
            if($find == '') {
                $find = $name;
            } else {
                $find = $find . ', ' . $name;
            }
        }
    }
}

echo $find;