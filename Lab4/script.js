function ChangeColorAndTextUsingElements(){
    const coding = document.getElementById("coding");
    coding.style.color = getRandomColor();
    coding.style.backgroundColor = getRandomColor();
}

function ChangeColorAndTextUsingQuery(){
    const debugging = document.querySelectorAll("li.debugging");
    debugging[0].style.color = getRandomColor();
    debugging[0].style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function UpdateImages() {
    const selectedFile = document.getElementById("fileInput").files[0];

    if (selectedFile) {
        const newImg = document.createElement("img");
        newImg.className = "innerImg";
        newImg.alt="New Image";
        newImg.src = URL.createObjectURL(selectedFile);

        const imagesList = document.getElementById("imagesList");
        imagesList.appendChild(newImg);
    }
}

function AddImg(){
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
}
function IncreaseImg(){
    const imagesList = document.querySelectorAll("#imagesList img.innerImg");
    for(let index = 0; index<imagesList.length;++index){
        imagesList[index].style.width =`${imagesList[index].width / 0.75}px`;
    }
}
function DecreaseAddImg(){
    const imagesList = document.querySelectorAll("#imagesList img.innerImg");
    for(let index = 0; index<imagesList.length;++index){
        imagesList[index].style.width =`${imagesList[index].width * 0.75}px`;
    }
}
function RemoveImg(){
    const imagesList = document.getElementById("imagesList");
    const images = imagesList.querySelectorAll("*");
    images[images.length-1].remove();
}