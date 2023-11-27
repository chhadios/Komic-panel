import React, { useEffect, useState } from 'react';
import PhotoAlbum from "react-photo-album";

const ComicDisplay = ({ comicPanels }) => {
    const [displayImg,setDisplayImg]=useState([]);
    useEffect(() => {
        if(comicPanels!=undefined){
            var randomnumber = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
            let imageURL=URL.createObjectURL(comicPanels);
            let temp={
                src: imageURL,
                width: randomnumber*100,
                height: 600,
            }
            setDisplayImg([...displayImg, temp])
        }
      },[comicPanels]);
    const photos = [
        {
          src: "https://cdn.pixabay.com/photo/2022/11/28/20/40/evil-7623152_1280.jpg",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://t3.ftcdn.net/jpg/05/34/89/44/360_F_534894436_Wy914H495HNsG8TVVtSRMnHS23BGHp30.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://e0.pxfuel.com/wallpapers/102/706/desktop-wallpaper-blue-cloud-dark-demon-final-full-for-your-mobile-tablet-explore-cool-dark-anime-cool-anime-anime-anime-demons.jpg",
          width: 400,
          height:200,
          srcSet: [
            { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 100, height: 300 },
            { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 100, height: 150 },
          ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tPU7kxoYxAJuYaK4KeFCpnRHMqoFJvQCwQ&usqp=CAU",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://www.entoin.com/images/demm51.jpg",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://wallpapers.com/images/featured/demon-e8ub5ammhk8j96d6.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://i.pinimg.com/736x/58/7d/c8/587dc83a894e4354fe0f4194fb0bfc76.jpg",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSDnXzgtjx2aKUplz_hwOtCH5cy_mcL0PeA&usqp=CAU",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://r2.starryai.com/results/677721207/1a51b93f-08aa-4627-9736-8a0f1eaca88b.webp",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://www.loverofdarkness.net/LOD/images/gallery/main/d4/133_300d4af0950c89b847cf6f7500e6060c.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
      ];
  return (
    <div>
      
    {displayImg.length>0?
    <PhotoAlbum layout="rows" photos={displayImg} />
    :
    <PhotoAlbum layout="rows" photos={photos} />
    // <img style={{height:"100vh",width:"100%"}} 
    // src='https://i0.wp.com/www.comicbookrevolution.com/wp-content/uploads/2018/02/Dark-Nights-Metal-5-1.jpg?ssl=1'></img>
    }
    </div>

  );
};

export default ComicDisplay;
