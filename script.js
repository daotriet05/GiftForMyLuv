const GalleryImages=document.querySelectorAll('.gallery-images');
console.log(GalleryImages);
const imageData=[
    "picture/1.jpg",
    "picture/2.jpg",
    "picture/2_1.jpg",
    "picture/2_2.jpg",
    "picture/3.jpg",
    "picture/3_1.jpg",
    "picture/3_2.jpeg",
    "picture/4.jpg",
    "picture/5.jpeg",
    "picture/6.jpg",
    "picture/7.jpeg",
    "picture/8.jpg",
    "picture/8_1.jpeg",
    "picture/9.jpeg",
    "picture/9_1.jpeg",
    "picture/10.jpeg",
    "picture/11.jpg",
    "picture/12.jpeg",
    "picture/12_1.jpg",
    "picture/13.jpg",
    "picture/14.jpg",
    "picture/15.jpg",
    "picture/16.jpeg",
    "picture/16_1.jpeg",
    "picture/16_2.jpeg",
    "picture/17.JPG",
]
GalleryImages.forEach(element => {
    imageData.forEach(image=>{
        let newImage=document.createElement("a");
        newImage.setAttribute('href','#');
        newImage.innerHTML=`<img src="${image}">`;
        element.appendChild(newImage);
    });
    imageData.forEach(image=>{
        let newImage=document.createElement("a");
        newImage.setAttribute('href','#');
        newImage.innerHTML=`<img src="${image}">`;
        element.appendChild(newImage);
    });
    console.log(element);
});