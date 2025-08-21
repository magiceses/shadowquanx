/*
https://cursor.com/api/dashboard/get-current-billing-cycle
{"startDateEpochMillis":"1755173562000","endDateEpochMillis":"1756383162000"}

*/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.startDateEpochMillis = "1755173562000";
    obj.endDateEpochMillis = "1757383162000";
    $done({body: JSON.stringify(obj)});
} catch (e) {
    $done({body});
}
