<?php
header('Content-type: application/json');
$json = file_get_contents('projectArray.json');
// $decoded = json_decode($json, true);
$example = array(
    "Kentwood Apartments" => array(
        "job_no" => "18-0405",
        "address" => "22415 Benson Road S, Kent",
        "permit" => "",
        "contractor" => "CDK Construction Services",
        "phone" => "(206) 371-9794",
        "manager" => "Isaac"),
    "West Mercer" => array(
      "job_no" => "18-0235",
      "address" => "4525 West Mercer Way, Mercer Island",
      "permit" => "1709-044",
      "contractor" => "RKK Construction, Inc.",
      "phone" => "(206) 730-3184",
      "manager" => "Jeff")
);
$json2 = '{
   "project": "Kentwood Apartments",
   "job_no": "18-0405",
   "address": "22415 Benson Road S, Kent",
   "permit": "",
   "contractor": "CDK Construction Services,",
   "phone": "(206) 371-9794",
   "manager": "Isaac"
 }';

$decoded = json_decode($json, true);
var_dump($decoded);
$return = array('exists' => false);

if (isset($_GET['project'])) {
    $project_name = trim($_GET['project']);
    if (isset($decoded[$project_name])) {
        $return['exists'] = true;
        $return['information'] = $decoded[$project_name];
    }
}

echo $return;
