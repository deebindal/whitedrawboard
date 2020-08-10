var board=document.getElementById('board')
var tools=document.getElementsByClassName('tools')[0]
var body=document.querySelector("body")

var ctx=board.getContext('2d')
board.width=window.innerWidth
board.height=window.innerHeight-tools.clientHeight

// window.addEventListener('resize',function(){
//     board.width=window.innerWidth
//     board.height=window.innerHeight
// })
// window.addEventListener('load',function(){
//     // console.log(window.innerHeight)
//     // console.log(tools.clientHeight)
     
//     ctx.beginPath()
// ctx.moveTo(50,50)
// ctx.lineTo(100,100)
// ctx.stroke()
// ctx.fillStyle='red'
// ctx.fillRect(50,50,100,100)
// console.log("wjhdegfr")
// })
var isDown=false;
var pointStack=[]

board.addEventListener('mousedown',function(event){
    var x=event.clientX;
    var y=event.clientY-tools.clientHeight;
    ctx.beginPath()
    ctx.moveTo(x,y)
    isDown=true;
    var point={
      x,y,widthLine:ctx.lineWidth,strokeColor:ctx.strokeStyle,effect:ctx.globalCompositeOperation,type:"begin"
        }
    pointStack.push(point)
    // console.log(x +","+y)
})

board.addEventListener('mousemove',function(event){
    if(!isDown) return
    var x=event.clientX;
    var y=event.clientY-tools.clientHeight;
    ctx.lineTo(x,y)
    ctx.stroke()
    var point={
      x,y,widthLine:ctx.lineWidth,strokeColor:ctx.strokeStyle,effect:ctx.globalCompositeOperation,type:"end"
        }
    pointStack.push(point)
    // console.log(x +","+y)
})

board.addEventListener('mouseup',function(){
  isDown=false
})

board.addEventListener('mouseout',function(){
  isDown=false;
})