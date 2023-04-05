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
export function postDream(data) {
  return request({
    url: "/dream",
    data: data,
    method: "post"
  });
}
// 手动工作统计
export function login(data) {
  return request({
    url: "/login",
    data: data,
    method: "post"
  });
}
