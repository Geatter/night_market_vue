
module.exports = {
    publicPath:process.env.NODE_EVN === 'production'?'/':'/',
    devServer: {
        open:false,//第一次啟動devServer時是否自動開啟瀏覽器
        host:'0.0.0.0',
        port:8080,
        hot: true,
        https: false,
        proxy: {
            '/api': {
                target: 'http://211.23.156.75:8089',
                secure: false,
                changeOrigin: true
            },
        }
    }
}


