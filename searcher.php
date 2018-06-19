<!DOCTYPE html>
<html>

<head>
    <title>Excel to JSON</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

</head>

<body>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="input-group">
                <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                    </span>
                <input type="text" class="form-control" placeholder="Search for...">
            </div>
        </div>
        <div class="col-lg-6"></div>
    </div>
</div>

    <!--
                <table class="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>Job Number</th>
                            <th>Project Name</th>
                            <th>Address</th>
                            <th>Permit</th>
                            <th>Contractor</th>
                            <th>Cell Phone</th>
                            <th>Project Manager</th>
                        </tr>
                        <?php
                            $url = 'jobs.json';
                            $data = file_get_contents($url);
                            $info = json_decode($data);
                        ?>
                            <?php  foreach($info as $row) : ?>

                            <tr>
                                <td>
                                    <?php echo $row->Job_No; ?>
                                </td>
                                <td>
                                    <?php echo $row->Project; ?>
                                </td>
                                <td>
                                    <?php echo $row->Address; ?>
                                </td>
                                <td>
                                    <?php echo $row->Permit; ?>
                                </td>
                                <td>
                                    <?php echo $row->Contractor; ?>
                                </td>
                                <td>
                                    <?php echo $row->Phone; ?>
                                </td>
                                <td>
                                    <?php echo $row->Manager; ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                    </tbody>
                </table>
-->
<!--
    </div>
    </div>
    </div>
-->



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</body>

</html>
