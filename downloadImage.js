function downloadImage(){
 var link=document.createElement('a')
 link.href=board.toDataURL()
 link.download="BoardPic.png"
 link.click()  
}