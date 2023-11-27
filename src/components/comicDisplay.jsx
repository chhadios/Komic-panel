import React, { useEffect, useState } from 'react';
import PhotoAlbum from "react-photo-album";

const ComicDisplay = ({ comicPanels }) => {
    const [displayImg,setDisplayImg]=useState([]);
    // console.log()
    console.log(displayImg)
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
          src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLWgBNzKs8tj0tvTA890SZtt5ZzEGi2-eFg&usqp=CAU",
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
          src: "https://www.indiewire.com/wp-content/uploads/2021/08/Robert-Pattinson-Batman.jpeg?w=300",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://m.media-amazon.com/images/I/71qFLDp32NL._AC_UF1000,1000_QL80_.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Oainj_4j5mGtx3M6bDQxVZzQs0J6su0bw&usqp=CAU",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://cdn.marvel.com/content/1x/034wlv_com_mas_mob_03.jpg",
          width: 200,
          height: 200,
        //   srcSet: [
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 450 },
        //     { src: "https://static.toiimg.com/thumb/msid-87094191,width-1280,resizemode-4/87094191.jpg", width: 400, height: 225 },
        //   ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4r5CjEDJ-TLHZOEm_4KVC70SAkWReLS8S0Q&usqp=CAU",
          width: 200,
          height:200,
        //   srcSet: [
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 400, height: 300 },
        //     { src: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", width: 200, height: 150 },
        //   ],
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklb1ExWtkinGceuc_YxNBXq3dCV2TwHaYFg&usqp=CAU",
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
      {/* {comicPanels.map((panel, index) => {
        let imageURL=URL.createObjectURL(panel);
        return (<img key={index} src={imageURL} alt={`Comic Panel ${index + 1}`} />)
})} */}
    {displayImg.length>0?
    <PhotoAlbum layout="rows" photos={displayImg} />
    :
    // <PhotoAlbum layout="rows" photos={photos} />
    <img style={{height:"100vh",width:"100%"}} 
    src='https://i0.wp.com/www.comicbookrevolution.com/wp-content/uploads/2018/02/Dark-Nights-Metal-5-1.jpg?ssl=1'></img>
    }
    </div>

  );
};

export default ComicDisplay;
