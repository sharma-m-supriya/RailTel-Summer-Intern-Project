<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$items = [
    ["id" => 1, "name" => "Item 1"],
    ["id" => 2, "name" => "Item 2"],
    ["id" => 3, "name" => "Item 3"]
];

echo json_encode($items);
?>
