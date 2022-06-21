import React from 'react';
import Image from "next/image";

interface PhotoLibraryProps{
  album: string
  numberOfPhotos: number,
  openPhotoView: Function
}


const PhotoLibrary: React.FC<PhotoLibraryProps> = (props) => {

  /**
   * Przygotuj scieżki do zdjęć
   */
  let images: string[] = []
  for (let i = 1; i <= props.numberOfPhotos ; i++) {
    images.push(`/albums/${props.album}/img${i}.jpg`)
  }

  return (
    <div className="flex flex-col w-full">
      <article className="prose">
        <h1>{props.album}</h1>
      </article>

      <div className="flex flex-row flex-wrap w-full">
        {
          images.map(element =>{
            return <img className="w-1/4 h-fit p-10 hover:blur cursor-pointer" key={element} src={element} onClick={()=> props.openPhotoView(element)}/>
          })
        }
      </div>
    </div>
  );
};

export default PhotoLibrary;