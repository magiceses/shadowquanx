/*
{
  "teamMembershipType" : null,
  "trialEligible" : true, //试用资格
  "customerBalance" : null,
  "membershipType" : "free", //核心会员状态，可能 free/pro/pro_trial
  "paymentId" : "cus_Srb9DQSFTMzWTd",
  "isTeamMember" : false,
  "isOnStudentPlan" : false,
  "individualMembershipType" : "free", // 个人订阅类型
  "trialWasCancelled" : false, // 试用是否被取消
  "verifiedStudent" : false
}

{"membershipType":"free_trial","daysRemainingOnTrial":6,"verifiedStudent":false,"trialEligible":false,"isOnStudentPlan":false,"customerBalance":null}
*/

let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.membershipType = "pro";
    obj.trialEligible = true;
    obj.trialWasCancelled = false
    obj.individualMembershipType = "pro"
    obj.daysRemainingOnTrial = 14
    $done({body: JSON.stringify(obj)});
} catch (e) {
    $done({body});
}
