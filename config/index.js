/**
 * 开发环境和生产环境配置文件
 */
let path = require('path')
module.exports = {
  build: {
      rootPath : '/InternetFinancialSupervision'  //此处应该与项目名称一致
  },

  dev: {
      port: 9997,//端口号
      rootPath : '/InternetFinancialSupervision'  //此处应该与项目名称一致
  }
}
