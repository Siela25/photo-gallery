import React, {useRef} from 'react';

interface ThumbnailImageProps{
  src: string,
  activeElement: string,
  onItemClick: Function
}

const ThumbnailImage: React.FC<ThumbnailImageProps> = (props) => {

  const ref = useRef(null);

  const scrollToItem = () =>{
    // @ts-ignore
    ref.current.scrollIntoView({behavior: 'smooth',
      block: 'center',
      inline: 'center'})

  }

  return (
    <div ref={ref} key={props.src} id={props.src} className={`carousel-item ${props.activeElement === props.src ? "border-b-4 border-indigo-500": "" }`}>
      <img className=" m-5 cursor-pointer" src={props.src} onClick={()=> {
        props.onItemClick(props.src, scrollToItem);
        //scrollToItem();
      }}/>
    </div>
  );
};

export default ThumbnailImage;