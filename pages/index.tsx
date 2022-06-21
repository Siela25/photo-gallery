import type { NextPage } from 'next'
import Navbar from "../components/Navbar/Navbar";
// @ts-ignore
import assetsConfig from "../public/index.yaml";
import {useState} from "react";
import Divider from "../components/Divider/Divider";
import PhotoLibrary from "../components/PhotoLibrary/PhotoLibrary";
import PhotoView from "../components/PhotoView/PhotoView"

const Home: NextPage = () => {

  const [activeAlbum, setActiveAlbum] = useState(assetsConfig[0].name)
  const [activeAlbumCount, setActiveAlbumCount] = useState(assetsConfig[0].count)
  const [showPhotoView, setShowPhotoView] = useState(false)
  const [photoViewSrc, setPhotoViewSrc] = useState("")

  /**
   * stwórz listę nazw albumów
   */
  let albumsNames: string[] = []
  assetsConfig.forEach((element: { name: string, count: number }) =>{
    albumsNames.push(element.name)
  })

  const setAlbumData = (albumName: string) =>{
    setActiveAlbum(albumName);
    setActiveAlbumCount(assetsConfig.find((element: { name: string, count: number }) => element.name === albumName).count);
  }

  const onOpenPhotoView = (src: string) =>{
    setShowPhotoView(true);
    setPhotoViewSrc(src);
  }

  const onClosePhotoView = () =>{
    setShowPhotoView(false);
    setPhotoViewSrc("");
  }

  return (
    <div>
      <Navbar albumsNames={albumsNames} onAlbumClick={setAlbumData}/>
      <Divider/>
      <PhotoLibrary album={activeAlbum} numberOfPhotos={activeAlbumCount} openPhotoView={onOpenPhotoView}/>
      <PhotoView album={activeAlbum} maxElements={activeAlbumCount} src={photoViewSrc} show={showPhotoView} onClose={onClosePhotoView} />
    </div>
  )
}

export default Home
