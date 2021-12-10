<?php
// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

function CallAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    //curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);


    $result = curl_exec($curl);

    curl_close($curl);

    var_dump($result);

    return $result;
}

$type="POST";
$link="https://api.chatfuel.com/bots/582d4ac9e4b083665773bfaa/users/399502870381325/send?chatfuel_token=0pLBEpZd8AbLLYJsGg1S04ZrpXOOs8aVU57VjlNcsmJXIOfqNod55E7ggGXmU3yd&chatfuel_block_id=582d4ac9e4b083665773bfbb";

CallAPI($type,$link,true);

?>
