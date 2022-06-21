import React, {useEffect, useRef} from 'react';
import ThumbnailImage from "./ThumbnailImage/ThumbnailImage";

interface ThumbnailsProps{
  album: string,
  maxElements: number,
  onItemClick: Function,
  activeElement: string,
  images: string[],
}

const Thumbnails: React.FC<ThumbnailsProps> = (props) => {


  const onItemClick = (element: string, centerThumbnail: Function) =>{
    // @ts-ignore
    /*document.getElementById(element).scrollIntoView({behavior: 'smooth',
      block: 'center',
      inline: 'center'});*/
    props.onItemClick(element, centerThumbnail)
  }

  useEffect( () => () => console.log("unmount"), [] );

  return (
    <div className="h-40 w-9/12 bg-zinc-800 rounded-lg mb-10 carousel rounded-box">
      {
        props.images.map(element =>{
          return <ThumbnailImage key={element} src={element} activeElement={props.activeElement} onItemClick={onItemClick}/>
        })
      }
    </div>
  );
};

export default Thumbnails;