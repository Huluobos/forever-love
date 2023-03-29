import request from "@/utils/request";

// const quesBank = process.env.VUE_APP_GATEWAY_QSTORE

// 根据统计日期查询统计记录
export function getDream(params) {
  return request({
    url: "/dream",
    params: params,
    method: "get"
  });
}
// 手动工作统计
export function postDream(date) {
  return request({
    url: "/dream",
    date: date,
    method: "post"
  });
}
// 手动工作统计
export function login(date) {
  return request({
    url: "/login",
    date: date,
    method: "post"
  });
}
