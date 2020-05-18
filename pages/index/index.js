Page({
  data:{
    awardCanvas:"",
    awardBg:'../../assets/images/award.jpg',
    windowWidth:0,
    windowHeight:0,
    startX:0,
    startY:0
  },
  onLoad(){
    this.getSysInfo()
  },
  onReady(){
    this.data.awardCanvas = wx.createCanvasContext('awardCanvas');
    let left=0
    let top=0
    this.data.awardCanvas.moveTo(left,0)
    this.data.awardCanvas.lineTo(left+400,0);
    this.data.awardCanvas.lineTo(left+400,150);
    this.data.awardCanvas.lineTo(left,150);
    this.data.awardCanvas.stroke()
    this.data.awardCanvas.setFillStyle('#ddd')
    this.data.awardCanvas.fill()
    this.data.awardCanvas.draw()
  },
  onShow(){},
  getSysInfo(){
    let that=this;
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          windowWidth:res.windowWidth,
          windowHeight:res.windowHeight
        })
      },
    })
  },
  touchStart(e){
    console.log('sss')
    let { x, y } = e.changedTouches[0];
    this.data.startX = x;
    this.data.startY = y;
  },
  touchMove(e){
    let { x, y } = e.changedTouches[0]; 
    this.data.awardCanvas.clearRect(x,y,15,15);
    this.data.awardCanvas.draw(true)
    this.data.startX = x;
    this.data.startY = y;
  }
})