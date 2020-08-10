var redoPointStack=[]
var interval=null
// var interval2=null
undo.addEventListener("mousedown",function(){
    interval=setInterval(() => {
        if(pointStack.length<=0) return;
            redoPointStack.push(pointStack.pop())
            // console.log("I am mad")
            redrawAll()
        },50);
    })

undo.addEventListener("mouseup",function(){
    clearInterval(interval)
    interval=null
})
redo.addEventListener("mousedown",function(){
    interval=setInterval(() => {
        if(redoPointStack.length<=0)  return; 
             pointStack.push(redoPointStack.pop())
             redrawAll()
         }, 50);
  
})
redo.addEventListener("mouseup",function(){
    clearInterval(interval)
    interval=null
})
function redrawAll(){
    ctx.clearRect(0,0,board.width,board.height)
    for(var i=0;i<pointStack.length;i++){
        ctx.lineWidth=pointStack[i].widthLine
        ctx.strokeStyle=pointStack[i].strokeColor
        ctx.globalCompositeOperation=pointStack[i].effect
        if(pointStack[i].type=='begin'){
            ctx.beginPath()
            ctx.moveTo(pointStack[i].x,pointStack[i].y)
        }else{
            ctx.lineTo(pointStack[i].x,pointStack[i].y)
            ctx.stroke()
        }
        // console.log(i+" iteration "+pointStack[i].x+"     "+pointStack[i].y)
    }
}
// function redrawAll2(){
//     for(var i=redoPointStack.length-1;i>=0;i--){
//         ctx.lineWidth=redoPointStack[i].widthLine
//         ctx.strokeStyle=redoPointStack[i].strokeColor
//         ctx.globalCompositeOperation=redoPointStack[i].effect
//         if(redoPointStack[i].type=='begin'){
//             ctx.beginPath()
//             ctx.moveTo(redoPointStack[i].x,redoPointStack[i].y)
//         }else{
//             ctx.lineTo(redoPointStack[i].x,redoPointStack[i].y)
//             ctx.stroke()
//         }
//     }
// }