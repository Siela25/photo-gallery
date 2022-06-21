import type { NextPage } from 'next'
import Navbar from "../components/Navbar/Navbar";
// @ts-ignore
import assetsConfig from "../public/index.yaml";
import {useState} from "react";
import Divider from "../components/Divider/Divider";
import PhotoLibrary from "../components/PhotoLibrary/PhotoLibrary";

const Home: NextPage = () => {

  const [activeAlbum, setActiveAlbum] = useState(assetsConfig[0].name)
  const [activeAlbumCount, setActiveAlbumCount] = useState(assetsConfig[0].count)

  /**
   * stwórz listę nazw albumów
   */
  let albumsNames: string[] = []
  assetsConfig.forEach((element: { name: string, count: number }) =>{
    albumsNames.push(element.name)
  })

  const setAlbumData = (albumName: string) =>{
    setActiveAlbum(albumName)
    setActiveAlbumCount(assetsConfig.find((element: { name: string, count: number }) => element.name === albumName).count)
  }

  return (
    <div>
      <Navbar albumsNames={albumsNames} onAlbumClick={setAlbumData}/>
      <Divider/>
      <PhotoLibrary album={activeAlbum} numberOfPhotos={activeAlbumCount} openPhotoView={()=> console.log("OPEN_PHOTO_VIEW") }/>
    </div>
  )
}

export default Home
