// @ts-check

import { useState, useEffect } from 'react'

import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

  useEffect(() => {
    const fetchDogList = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const listData = await response.json()
      setBreeds(listData.message)
    }

    fetchDogList()
  }, []) // ここの第2引数を空欄にすることで、初回レンダリング時のみに実行できる

  console.log(breeds)

  const handleClickDogImages = () => {
    console.log('You clicked me!')
    fetchDogsImg(selectedBreed)
  }

  // @ts-ignore
  const handleSelectedBreed = (selectedBreed) =>{
    setSelectedBreed(selectedBreed)
    console.log('You selected '+selectedBreed)
  }

  // @ts-ignore

  const imageContainer = document.getElementById('image-container')

  const fetchDogsImg = async (fetchBreed) => {
    try{
      console.log('hi')
      console.log(fetchBreed)
      const response = await fetch(`https://dog.ceo/api/breed/${fetchBreed}/images/random/3`);
      const data = await response.json()
      const images = data.message

      imageContainer.innerHTML = ''

      images.forEach(imageUrl => {
        const imgElement = document.createElement('img')
        imgElement.src = imageUrl
        imageContainer.appendChild(imgElement)
      })
      
      console.log('Imgs: ' + images)
      return images

    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }

  const [fetchDogsImgState] = useState(fetchDogsImg)




  return (
    <>
      <button type="button" onClick={handleClickDogImages}>表示</button>
      <p></p>
      
      <BreedsSelect breeds={breeds} onChange={handleSelectedBreed} selectedBreed={selectedBreed} />
      <div id='image-container'></div>
    </>
  )
}

export default DogListContainer
