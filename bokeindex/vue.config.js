module.exports = {
    devServer: {
        // historyApiFallback: true,
        // noInfo: true,
        // overlay: true,
        proxy: {
            '/cityapi': {
                target: 'http://res.42du.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/cityapi': '/'          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
                },
            },
            '/api': {
                target: 'http://localhost:3000', 
            }
        }
    }
  }