<?php

$names = ['haid', 'hadi', 'ali'];

$search = $_GET['search'];

$output = '';

if(strlen($search) > 0) {
    foreach($names as $name) {
        if(strtolower($search) == strtolower(substr($name, 0, strlen($search)))) {

            if($output == '') {

                $output = $name;
            } else {
                $output = $name . ', ' . $output;
            }
        }
    }

    echo $output == '' ? 'no match' : $output;
}
