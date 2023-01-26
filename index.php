<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
        <div class="row align-items-center justify-content-center">
            <div class="col-6">
                <form method="get">
                    <div class="form-outline">
                        <input type="text" name="search" id="formControlLg" class="form-control form-control-lg"
                            onkeyup="live_search(this.value)" />
                        <label class="form-label" for="formControlLg">search</label>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <p id="show"></p>
    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"></script>

    <script src="./assets/js/script.js"></script>
</body>

</html>
