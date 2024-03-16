// @ts-check

import { useState, useEffect } from 'react'

import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('')

  useEffect(() => {
    const fetchDogList = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const listData = await response.json()
      setBreeds(listData.message)
    }

    fetchDogList()
  }, []) // ここの第2引数を空欄にすることで、初回レンダリング時のみに実行できる

  console.log(breeds)

  const [selectedBreed, setSelectedBreed] = useState('')



  return (
    <>
      <p>This is a dog list</p>
      <ul>
        <li>List item 1</li>
      </ul>
      <BreedsSelect breeds={breeds} />
    </>
  )
}

export default DogListContainer
