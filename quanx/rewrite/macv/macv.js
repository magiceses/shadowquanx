// {
//   "code": 200,
//   "data": {
//       "surplus": 1,
//       "surplus_pic": 1,
//       "surplus_video": 1,
//       "vip_name": "普通会员",
//       "msg_count": 0,
//       "headimg": "\/assets\/images\/headimg.png",
//       "vip": 0,
//       "group_id": 1,
//       "point": 124,
//       "nickname": "小泥人",
//       "id": 162115,
//       "ip": "34.126.69.71",
//       "icon_time": 0,
//       "overduedate": "1970-01-01",
//       "is_sign": 1,
//       "prize_info": [
//           {
//               "id": 17,
//               "title": "300个积分",
//               "type": 1
//           },
//           {
//               "id": 18,
//               "title": "100优惠券",
//               "type": 2
//           },
//           {
//               "id": 19,
//               "title": "20优惠券",
//               "type": 2
//           },
//           {
//               "id": 20,
//               "title": "5 积分",
//               "type": 1
//           },
//           {
//               "id": 21,
//               "title": "10优惠券",
//               "type": 2
//           },
//           {
//               "id": 22,
//               "title": "10积分",
//               "type": 1
//           },
//           {
//               "id": 23,
//               "title": "5优惠券",
//               "type": 2
//           },
//           {
//               "id": 24,
//               "title": "200个积分",
//               "type": 1
//           }
//       ],
//       "favorite_pic_id": [],
//       "favorite_update_data": [],
//       "is_coupon": 0,
//       "coupon": {
//           "0": {
//               "id": 1,
//               "coupon_name": "5元新人优惠券",
//               "min_consume": "75.00",
//               "add_time": 1605081938,
//               "term": 7,
//               "coupon_point": "5.00",
//               "status": 1
//           },
//           "5": {
//               "id": 6,
//               "coupon_name": "10元新人优惠券\t",
//               "min_consume": "98.00",
//               "add_time": 1640077387,
//               "term": 7,
//               "coupon_point": "10.00",
//               "status": 1
//           },
//           "6": {
//               "id": 7,
//               "coupon_name": "20元新人优惠券",
//               "min_consume": "168.00",
//               "add_time": 1640077414,
//               "term": 7,
//               "coupon_point": "20.00",
//               "status": 1
//           }
//       },
//       "wx_group_qr": "https:\/\/pic.mac89.com\/icon\/202112\/21154820_54b8aa434f.jpeg",
//       "qq_group_qr": "https:\/\/pic.mac89.com\/icon\/202112\/21155239_92d701d6de.jpeg",
//       "verify_d": false
//   },
//   "activity_data": [
//       {
//           "id": 8,
//           "activity_name": "[新年春节]  3 年会员",
//           "money": 388,
//           "activity_time": 94608000,
//           "vip_id": 38,
//           "start_time": 1737216000,
//           "end_time": 1739635200,
//           "enable": 1,
//           "desc": "[新年春节] 大促销原价：505",
//           "down_id_str": "",
//           "original_price": "168.00",
//           "total_original_price": "168.00",
//           "start_time_str": "2025年01月19日 00:00:00",
//           "end_time_str": "2025年02月16日 00:00:00"
//       },
//       {
//           "id": 9,
//           "activity_name": "[新年春节]  2 年会员",
//           "money": 288,
//           "activity_time": 63072000,
//           "vip_id": 38,
//           "start_time": 1737216000,
//           "end_time": 1739635200,
//           "enable": 1,
//           "desc": "[新年春节] 大促销原价：336",
//           "down_id_str": "",
//           "original_price": "168.00",
//           "total_original_price": "168.00",
//           "start_time_str": "2025年01月19日 00:00:00",
//           "end_time_str": "2025年02月16日 00:00:00"
//       },
//       {
//           "id": 10,
//           "activity_name": "[新年春节] Vip年会员",
//           "money": 168,
//           "activity_time": 38880000,
//           "vip_id": 38,
//           "start_time": 1737216000,
//           "end_time": 1739635200,
//           "enable": 1,
//           "desc": "多送3个月",
//           "down_id_str": "",
//           "original_price": "168.00",
//           "total_original_price": "168.00",
//           "start_time_str": "2025年01月19日 00:00:00",
//           "end_time_str": "2025年02月16日 00:00:00"
//       },
//       {
//           "id": 11,
//           "activity_name": "[新年春节]  vip终身会员",
//           "money": 788,
//           "activity_time": 2147385600,
//           "vip_id": 39,
//           "start_time": 1737216000,
//           "end_time": 1739635200,
//           "enable": 1,
//           "desc": "大促销原价：888",
//           "down_id_str": "",
//           "original_price": "888.00",
//           "total_original_price": "888.00",
//           "start_time_str": "2025年01月19日 00:00:00",
//           "end_time_str": "2025年02月16日 00:00:00"
//       }
//   ]
// }

let body = $response.body;

let jsonBody = JSON.parse(body);

try {
    jsonBody.data.vip_name = "终身会员";
    jsonBody.data.id = 198041
    jsonBody.data.nickname = "加菲猫锐";
    jsonBody.data.vip = 2;
    jsonBody.data.is_sign = 1;
    jsonBody.data.point = 1000;
    jsonBody.data.prize_info = [];
    jsonBody.data.coupon = {};
    jsonBody.data.favorite_pic_id = [];
    jsonBody.data.favorite_update_data = [];
    jsonBody.data.is_coupon = 0;
} catch (error) {
    jsonBody.data.vip_name = "终身会员";
    jsonBody.data.id = 198041
    jsonBody.data.nickname = "加菲猫锐";
    jsonBody.data.vip = 2;
    jsonBody.data.point = 1000;
    console.log(error);
    $done({ body: body });
    return;
}

$done({ body: JSON.stringify(jsonBody) });
