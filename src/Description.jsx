// @ts-check

import DogImage from "./DogImage"

export const Description = ({ handleClick, url }) => {
  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <button className="button" onClick={handleClick}>
        更新
      </button>
      <p></p>
      <DogImage url={url} />
      <p>上部に画像が表示されます。</p>
    </>
  )
}

export default Description
