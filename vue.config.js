module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://MoveDeliveryBACKEND.danielbalbinott.repl.co',
        ws: true,
        changeOrigin: true
      },
    }    
  }
};