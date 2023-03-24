/**
 *
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */

export function randomNum (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @desc 判断是不是json
 * @param {str} string
 * @return {Boolean}
 */
export function isJson (str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}

/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
export function deepClone (values) {
  var copy

  // Handle the 3 simple types, and null or undefined
  if (values == null || typeof values !== 'object') return values

  // Handle Date
  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  // Handle Array
  if (values instanceof Array) {
    copy = []
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i])
    }
    return copy
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {}
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr])
    }
    return copy
  }

  throw new Error("Unable to copy values! Its type isn't supported.")
}

/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export function isEmptyObject (obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { return false }
  return !Object.keys(obj).length
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
export function formatPassTime (startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12)
  if (year) return year + '年前'
  if (month) return month + '个月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  else return '刚刚'
}

/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
export function formatRemainTime (endTime) {
  var startDate = new Date() // 开始时间
  var endDate = new Date(endTime) // 结束时间
  var t = endDate.getTime() - startDate.getTime() // 时间差
  var d = 0, h = 0, m = 0, s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor(t / 1000 / 60 / 60 % 24)
    m = Math.floor(t / 1000 / 60 % 60)
    s = Math.floor(t / 1000 % 60)
  }
  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒'
}

/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
export function timeLeft (startTime, endTime) {
  if (!startTime || !endTime) {
    return
  }
  var startDate, endDate
  if (startTime instanceof Date) {
    startDate = startTime
  } else {
    startDate = new Date(startTime.replace(/-/g, '/')) // 开始时间
  }
  if (endTime instanceof Date) {
 	endDate = endTime
  } else {
    endDate = new Date(endTime.replace(/-/g, '/')) // 结束时间
  }
  var t = endDate.getTime() - startDate.getTime()
  var d = 0,
    h = 0,
    m = 0,
    s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor(t / 1000 / 60 / 60 % 24)
    m = Math.floor(t / 1000 / 60 % 60)
    s = Math.floor(t / 1000 % 60)
  }
  return { d, h, m, s }
}
