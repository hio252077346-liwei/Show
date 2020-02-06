var imgContainer,msgDiv;
window.onload=function () {
    imgContainer=document.getElementById("imgContainer");
    msgDiv=document.getElementById("msg");

    imgContainer.ondragover=function (e) {
        e.preventDefault();
    }
    imgContainer.ondrop=function (e) {
        e.preventDefault();
        showObj(e.dataTransfer.files);
        var f=e.dataTransfer.files[0];
        var fileRader=new FileReader()
        fileRader.onload=function (e) {
            showObj(e.target);
            imgContainer.innerHTML="<img src=\""+fileRader.result+"\">"
        }
        fileRader.readAsDataURL(f);
    }
}
function showObj(obj) {
    var s="";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML=s;
}