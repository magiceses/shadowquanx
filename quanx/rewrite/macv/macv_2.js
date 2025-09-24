let body = $response.body;

let jsonBody = JSON.parse(body);

try {
    jsonBody.code = 200;
    jsonBody.msg = "success";
} catch (error) {
    jsonBody.code = 200;
    jsonBody.msg = "success";
    console.log(error);
    $done({ body: body });
    return;
}

$done({ body: JSON.stringify(jsonBody) });
