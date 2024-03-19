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
  }




  // @ts-ignore
  const handleSelectedBreed = (selectedBreed) =>{
    setSelectedBreed(selectedBreed)
    console.log('You selected '+selectedBreed)
    fetchDogsImg(selectedBreed)
  }

  // @ts-ignore
  const fetchDogsImg = async (fetchBreed) => {
    console.log('hi')
    console.log(fetchBreed)
    const response = await fetch(`https://dog.ceo/api/breed/${fetchBreed}/images/random/3`);
    console.log('Imgs: ' + response)
    return response
  }

  const [fetchDogsImgState] = useState(fetchDogsImg)




  return (
    <>
      <button type="button" onClick={handleClickDogImages}>検索</button>
      <p></p>
      
      <BreedsSelect breeds={breeds} onChange={handleSelectedBreed} selectedBreed={selectedBreed} />
    </>
  )
}

export default DogListContainer
