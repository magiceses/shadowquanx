/*
// 不可以试用
{
  "teamMembershipType" : null,
  "trialEligible" : true,
  "customerBalance" : null,
  "membershipType" : "free",
  "paymentId" : "cus_Srb9DQSFTMzWTd",
  "isTeamMember" : false,
  "isOnStudentPlan" : false,
  "individualMembershipType" : "free",
  "trialWasCancelled" : false,
  "verifiedStudent" : false
}

// 可以试用
{
  "teamMembershipType" : null,
  "trialEligible" : false,
  "customerBalance" : null,
  "membershipType" : "free_trial",
  "paymentId" : "cus_SrjLGh73TumuyD"
  "isTeamMember" : false,
  "isOnStudentPlan" : false,
  "individualMembershipType" : "free_trial",
  "trialWasCancelled" : false,
  "verifiedStudent" : false,
  "daysRemainingOnTrial" : 14,
  "subscriptionStatus" : "trialing",
}
*/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.membershipType = "free_trial";
    obj.paymentId = "cus_SrjLGh73TumuyD";
    obj.trialEligible = false;
    obj.trialWasCancelled = false
    obj.individualMembershipType = "free_trial"
    obj.daysRemainingOnTrial = 14
    obj.subscriptionStatus = "trialing"
    $done({body: JSON.stringify(obj)});
} catch (e) {
    $done({body});
}
