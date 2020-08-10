var pencil=document.getElementsByClassName('pencil')[0]
var eraser=document.getElementsByClassName('eraser')[0]
var stickyNotes=document.getElementsByClassName('stickyNotes')[0]
var upload=document.getElementsByClassName('upload')[0]
var download=document.getElementsByClassName('download')[0]
var undo=document.getElementsByClassName('undo')[0]
var redo=document.getElementsByClassName('redo')[0]
var pencilOptions=document.getElementsByClassName('pencilOptions')[0]
var eraserOptions=document.getElementsByClassName('eraserOptions')[0]

var previousTool=pencil
var activeTool=pencil

function handleToolChange(tool){
    if(tool=='pencil'){
        if(activeTool==pencil){
           pencilOptions.classList.remove("noShow")
        }else{
            eraserOptions.classList.add('noShow')
            previousTool.classList.remove('active')
            pencil.classList.add('active')
            activeTool=pencil
            previousTool=pencil
            ctx.globalCompositeOperation='source-over'
        }
    }
   else if(tool=='eraser'){
        if(activeTool==eraser){
            eraserOptions.classList.remove('noShow')
        }else{
            pencilOptions.classList.add('noShow')
            previousTool.classList.remove('active')
            eraser.classList.add('active')
            activeTool=eraser
            previousTool=eraser
            ctx.globalCompositeOperation='destination-out'
        }
    }
    else{
        pencilOptions.classList.add('noShow')
        eraserOptions.classList.add('noShow')
        activeTool=null
    if(tool=='stickyNotes'){
        previousTool.classList.remove('active')
        stickyNotes.classList.add('active')
        previousTool=stickyNotes
        createSticky()
    }
   else if(tool=='upload'){
        previousTool.classList.remove('active')
        upload.classList.add('active')
        previousTool=upload
        uploadImage()
    }
   else if(tool=='download'){
        previousTool.classList.remove('active')
        download.classList.add('active')
        previousTool=download
        downloadImage()
    }
   else if(tool=='undo'){
        previousTool.classList.remove('active')
        undo.classList.add('active')
        previousTool=undo
        // undoCanvas() 
    }
   else if(tool=='redo'){
        previousTool.classList.remove('active')
        redo.classList.add('active')
        previousTool=redo
    }
}
}
function strokeWidth(value){
    ctx.lineWidth=value
}
function strokeColor(color){
    ctx.strokeStyle=color
}