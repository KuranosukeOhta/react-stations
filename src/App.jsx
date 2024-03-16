// DO NOT DELETE

import './App.css'

import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer'

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
  // 取得した画像と併せてHTMLを構築
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
