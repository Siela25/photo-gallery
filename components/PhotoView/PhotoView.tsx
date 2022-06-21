import React, {useCallback, useEffect, useRef, useState} from 'react';
import Thumbnails from "./Thumbnails/Thumbnails";

interface PhotoViewProps{
  album: string,
  maxElements: number
  src: string,
  show: boolean,
  onClose: Function

}

const PhotoView: React.FC<PhotoViewProps> = (props) => {
  const [src, setSrc] = useStateCallback(props.src)

  let images: string[] = []
  for (let i = 1; i <= props.maxElements ; i++) {
    images.push(`/albums/${props.album}/img${i}.jpg`)
  }

  useEffect(()=>{
    setSrc(props.src)
  }, [props.src])



  // @ts-ignore
  return (
    <div className={`${props.show ? "flex" : "hidden"} justify-between items items-center flex-col inset-0 fixed w-screen h-screen bg-zinc-800/90`}>
      <p className="mt-5 cursor-pointer hover:underline" onClick={()=> props.onClose()}>Zamknij</p>
      <img className="h-4/6 w-fit" src={src}/>
      <Thumbnails album={props.album} maxElements={props.maxElements} onItemClick={(element: React.SetStateAction<string>, centerThumbnail: Function)=> setSrc(element, ()=>{centerThumbnail()})} activeElement={src} images={images}/>
    </div>
 );
};


function useStateCallback(initialState: any) {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null);

  const setStateCallback = useCallback((state: any, cb: null) => {
    cbRef.current = cb;
    setState(state);
  }, []);

  useEffect(() => {
    if (cbRef.current) {
      // @ts-ignore
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
}

export default PhotoView;