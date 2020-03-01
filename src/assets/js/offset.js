/**
 * 获取当前时区
 *
 *
*/

export const offset = function() {
    var nowTime = new Date()
    var offset1 = nowTime.getTimezoneOffset() / 60
    return -offset1
  }
  