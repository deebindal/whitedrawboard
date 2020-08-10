function createSticky(){
    // var body=document.querySelector('body')
    var stickyPad=document.createElement('div')
    stickyPad.setAttribute("class","stickyPad")
    // stickyPad.setAttribute("id","draggable")
    // stickyPad.setAttribute("class","ui-widget-content")
    var stickyNavbar=document.createElement('div')
    stickyNavbar.setAttribute("class","stickyNavbar")
    var close=document.createElement('div')
    close.setAttribute("class","closeButton")
    var minimise=document.createElement('div')
    minimise.setAttribute("class","minimise")
    var textArea=document.createElement('textarea')
    textArea.setAttribute("class","textArea")
    stickyPad.appendChild(stickyNavbar)
    stickyNavbar.appendChild(minimise)
    stickyNavbar.appendChild(close)
    stickyPad.appendChild(textArea)
    body.appendChild(stickyPad)
    $(".stickyPad").draggable({
        containment: $(".parent")
    });
    // $(".stickyPad").resizable()
    minimise.addEventListener("click",function(){
        textArea.classList.toggle('noShow')
    })
    close.addEventListener("click",function(){
        body.removeChild(stickyPad)
    })
}
