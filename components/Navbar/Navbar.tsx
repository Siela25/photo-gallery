import React from 'react';

interface NavbarProps{
  children?: JSX.Element
  albumsNames: string[]
  onAlbumClick: Function
}


const Navbar: React.FC<NavbarProps> = (props) => {


  const albums = props.albumsNames.map(element =>{
    return <li key={element} onClick={() =>props.onAlbumClick(element)}><a>{element}</a></li>;
  });


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {albums}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;