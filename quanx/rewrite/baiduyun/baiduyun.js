/*

[rewrite_local]

^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://qxnav.com/rules/QuantumultX/js/backup/js/bdcloud.js

[mitm] 

hostname = pan.baidu.com

*/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  "product_infos" : [
    {
      "cur_svip_type" : "Crack",
      "product_name" : "svip2_nd",
      "product_description" : "瑙ｉ攣鍊嶉€�+鐢昏川",
      "function_num" : 510004015,
      "start_time" : 1672502400,
      "buy_description" : "鏃犱笅杞藉姞閫�",
      "buy_time" : 980784000,
      "product_id" : "闂ソ",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 4070880000,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    }
  ],
  "level_info" : {
    "current_level" : 10,
  }
};
$done({body:JSON.stringify(modified)});