/*
https://cursor.com/api/dashboard/get-service-account-spend-limit
{"spendLimitCents":5000,"currentSpendCents":0,"isInFreeTrial":true}

*/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.spendLimitCents = 5000;
    obj.currentSpendCents = 0;
    obj.isInFreeTrial = true;
    $done({body: JSON.stringify(obj)});
} catch (e) {
    $done({body});
}
