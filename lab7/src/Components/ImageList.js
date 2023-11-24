import Image from "./Image";
import LvivImage from "./Lviv.avif";
import React, {useState} from "react";

function ImageList() {
    const initialImage = <Image className="innerImg" src={LvivImage} alt="Lviv"/>;
    const [listOfImages, setListOfImages] = useState([initialImage]);

    const updateImages = () => {
        const selectedFile = document.getElementById("fileInput").files[0];
        if (selectedFile) {
            const newImage =  <Image className="innerImg" src={URL.createObjectURL(selectedFile)} alt="New Image"/>;
            setListOfImages([...listOfImages, newImage]);
        }
    }
    const addImg = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput.click();
    }


    const increaseImg = () => {
        const imagesList = document.querySelectorAll("#imagesList img.innerImg");
        for(let index = 0; index<imagesList.length;++index){
            imagesList[index].style.width =`${imagesList[index].width / 0.75}px`;
        }
    };

    const decreaseImg = () => {
        const imagesList = document.querySelectorAll("#imagesList img.innerImg");
        for(let index = 0; index<imagesList.length;++index){
            imagesList[index].style.width =`${imagesList[index].width * 0.75}px`;
        }
    };

    const removeImg = () =>{
        const updatedList = [...listOfImages];
        updatedList.pop();
        setListOfImages(updatedList);
    }


    return (
        <>
            <div>
                <div id="imagesList">
                    {listOfImages.map((element, index) => (
                        <React.Fragment key={index}>{element}</React.Fragment>
                    ))}
                </div>
                <div className="buttons">
                    <button className="customButton" onClick={addImg}>Додати</button>
                    <input type="file" id="fileInput" onChange={updateImages} accept=".jpg, .jpeg, .png" style={{display: "none"}} />
                    <button className="customButton" onClick={increaseImg}>Збільшити</button>
                    <button className="customButton" onClick={decreaseImg}>Зменшити</button>
                    <button className="customButton" onClick={removeImg}>Видалити</button>
                </div>
            </div>
        </>
    );
}

export default ImageList;