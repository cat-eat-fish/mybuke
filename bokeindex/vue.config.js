module.exports = {
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:3000',  //目标接口域名
            },
        }
    }
  }