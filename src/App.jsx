// DO NOT DELETE

import './App.css'
import { useState } from 'react';

import Header from './Header';
import Description from './Description';

/**
 * @type {() => JSX.Element}
 */

/*async function getDogImgData() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const imgData = await response.json();
  return imgData
}
*/

export const App = () => {



  // 犬の画像を取得
  const [url, setDogUrl] = useState(""); //useStateの初期値

  const fetchDogImg = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const imgData = await response.json();
    setDogUrl(imgData.message);
  };

  // コンポーネントがマウントされたときに画像を取得するフック
  useState(() => {
    fetchDogImg();
  }, []);

  function handleClick() {
    fetchDogImg()
    //alert("you clicked!")
  }

  // 取得した画像と併せてHTMLを構築
  return (
    <div>
      <Header />
      <Description handleClick={handleClick} url={url} />

    </div>
  )
}
