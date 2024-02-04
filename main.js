function download (file){
    var element=document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,');
    element.setAttribute('download',file);
    document.body.appendChild(element);
    element.onclick();
    document.body.removeChild(element);
}

document.getElementsByClassName("resume").addEventListener("click",function(){
    var filename="Ben varkey cover letter resume.pdf";
    download(filename)

})