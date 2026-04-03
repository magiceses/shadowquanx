// code: 200
// url: "https://down.mac89.com/202403/K4b8D01995867A03.dmg?token=dd8bec6cc293bfa61073e47a74e9228c1758724311"
let body = $response.body;

let jsonBody = JSON.parse(body);

try {
    jsonBody.code = 1000;
    jsonBody.msg = "success";
} catch (error) {
    jsonBody.code = 1000;
    jsonBody.msg = "success";
    console.log(error);
    $done({ body: body });
    return;
}

$done({ body: JSON.stringify(jsonBody) });
