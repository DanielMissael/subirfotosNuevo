const dropArea=document.getElementById("drop_area")
const inputFile=document.getElementById("input_file")
const imgeView=document.getElementById("img_view")

inputFile.addEventListener("change",uploadImage);
/*
function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage=`url(${imgLink})`;
    imgView.textContent="";
    imgView.style.border=0;
}

dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
})

dropArea.addEventListener("drop",function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage()
})
*/

 

function uploadImage(e){
    var imgSource = e.target.result;
    var preview= document.getElementById('preview')

    preview.src=imgSource;
}

function documentProgres(e){
    var img = e.target.files[0];

    var read = new FileReader();

    read.addEventListener('load',uploadImage,false)
    
    read.readAsDataURL(img);
}

function droparea(e){

    const dropArea = document.querySelector(".drop-area");
}

document.getElementById('document')

.addEventListener('change',documentProgres,false)*/
