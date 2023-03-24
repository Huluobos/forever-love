
export function $AJAX (url, data, method) {
  return new Promise((resolve, reject) => {
    // uni.request({
    //   url: url,
    //   data: data,
    //   method: method,
    //   // header?:header, header
    //   timeout: 100000,
    //   success: (res) => {
    //     console.log(res.data)
    resolve('res')
    //       },
    //       fail: (err) => {
    //         reject(err)
    //       },
    //       complete: () => {
    //         // 接口调用结束的回调函数（调用成功、失败都会执行）
    //       }
    //     })
  })
}
