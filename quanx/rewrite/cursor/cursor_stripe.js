/*
https://cursor.com/api/auth/stripe
{
    "membershipType": "free_trial",
    "paymentId": "cus_SrjLGh73TumuyD",
    "daysRemainingOnTrial": 8,
    "subscriptionStatus": "trialing",
    "verifiedStudent": false,
    "trialEligible": false,
    "isOnStudentPlan": false,
    "customerBalance": 0,
    "trialWasCancelled": false,
    "isTeamMember": false,
    "teamMembershipType": null,
    "individualMembershipType": "free_trial"
}
*/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.membershipType = "free_trial";
    obj.paymentId = "cus_SrjLGh73TumuyD";
    obj.daysRemainingOnTrial = 14;
    obj.subscriptionStatus = "trialing";
    obj.verifiedStudent = false;
    obj.trialEligible = false;
    obj.isOnStudentPlan = false;
    obj.customerBalance = 0;
    obj.trialWasCancelled = false;
    obj.isTeamMember = false;
    obj.teamMembershipType = null;
    obj.individualMembershipType = "free_trial";
    $done({body: JSON.stringify(obj)});
} catch (e) {
    $done({body});
}
