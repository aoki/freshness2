module.exports = {
  browserWindowOptions: {
    width: 800,
    height: 600,
    // backgroundColor: '#FFFFFF',
    webPreferences: {
      webSecurity: false
    },
    titleBarStyle: "customButtonsOnHover"
  },
  closed: function(){
    console.log('closed')
  },
  ready: function(mainWindow){
    console.log('ready')
  },
  windowAllClosed: function(app){
    console.log('windowAllClosed')
  }
};
