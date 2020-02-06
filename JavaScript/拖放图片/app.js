var boxdiv,msgdiv,img1;
window.onload=function () {
    boxdiv=document.getElementById("box1");
    box2div=document.getElementById("box2");
    msgdiv=document.getElementById("msg");
    img1=document.getElementById("img1");
    // boxdiv.ondragenter=function (e) {
    //  showObj(e);
    // }
    boxdiv.ondropover=function (e) {
        e.preventDefault();
    }
    box2div.ondropover=function (e) {
        e.preventDefault();
    }
    img1.ondragstart=function (e) {
        e.dataTransfer.setData("imgId","img1");
    }
    boxdiv.ondrop=dropImghadler;
    box2div.ondrop=dropImghadler;

    function dropImghadler(e) {
        showObj(e.dataTransfer);
        e.preventDefault();
        //
        var img=document.getElementById(e.dataTransfer.getData("imgId"));
        e.target.appendChild(img);
    }
}
function showObj(obj) {
    var s="";
    for(var k in obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgdiv.innerHTML=s;
}