// DO NOT DELETE

import './App.css'
import { useState } from 'react'

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
  const [dogUrl, setDogUrl] = useState('') //useStateの初期値

  const fetchDogImg = async () => {
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ")
  }

  function handleClick() {
    fetchDogImg()
    //alert("you clicked!")
  }

  // 取得した画像と併せてHTMLを構築
  return (
    <>
      <header>
        <h1>Dogアプリ</h1>
        <p>犬の画像を表示するサイトです</p>
        <button onClick={handleClick}>更新</button>
        <p></p>
        <img src={dogUrl} />
        <p>上部に画像が表示されます。</p>
      </header>
    </>
  )
}
