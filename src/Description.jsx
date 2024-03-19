// @ts-check

import { useState } from 'react'
import { useEffect } from 'react'
import { DogImage } from './DogImage'
import PropTypes from 'prop-types';

// @ts-ignore
export const Description = ({ handleClick }) => {
  // 犬の画像を取得
  const [dogUrl, setDogUrl] = useState('') //useStateの初期値

  /*const fetchDogImg = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const imgData = await response.json()
    setDogUrl(imgData.message)
  }

  // コンポーネントがマウントされたときに画像を取得するフック
  useState(() => {
    fetchDogImg()
  }, [])

  function handleClick() {
    fetchDogImg()
    //alert("you clicked!")
  }
  */


  const fetchRandomDogImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDogUrl(data.message)
    })
  }

  handleClick = () => {
    fetchRandomDogImg()
  }

  useEffect(() => {
    fetchRandomDogImg()
  }, [])

  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <button className="button" onClick={handleClick}>
        画像を表示
      </button>
      <p></p>
      <DogImage imageUrl={dogUrl} />
      <p>上部に画像が表示されます。</p>
    </>
  )
}

export default Description

Description.propTypes = {
  handleClick: PropTypes.func.isRequired
};