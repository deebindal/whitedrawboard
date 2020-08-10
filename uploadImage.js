function uploadImage(){
    var input=document.createElement('input')
    input.setAttribute("type","file")
    input.setAttribute("onchange","imageUploaded(event)")
    input.click()
}
function imageUploaded(event){
    var imagePad=document.createElement("div")
    imagePad.setAttribute("class","imagePad")
    // imagePad.class="imagePad"
    var imageNavbar=document.createElement("div")
    imageNavbar.setAttribute("class","imageNavbar")
    var drawImageIcon=document.createElement("div")
    drawImageIcon.setAttribute("class","drawImageIcon")
    var closeicon=document.createElement("div")
    closeicon.setAttribute("class","closeicon")
    var image=document.createElement("img")
    image.setAttribute("class","image")
    image.setAttribute("accept","image/png, image/jpeg, image/jpg")
    imagePad.appendChild(imageNavbar)
    imageNavbar.appendChild(drawImageIcon)
    imageNavbar.appendChild(closeicon)
    imagePad.appendChild(image)
    body.appendChild(imagePad)
    image.src=URL.createObjectURL(event.target.files[0])
    $(".imagePad").draggable({
        containment:$(".parent")
       })
    $(".imagePad").resizable({
        alsoResize:'.image'
    })   
    // $(".image").resizable() 
    // $(function(){
    //     $(".image").resizable();
    //  }); 
    drawImageIcon.addEventListener("click",function(event){
        var rect=image.getBoundingClientRect()
        ctx.drawImage(image,rect.left,rect.top-90,image.clientWidth,image.clientHeight)
        closeicon.click()
    })
    closeicon.addEventListener("click",function(){
        body.removeChild(imagePad)
    })
}