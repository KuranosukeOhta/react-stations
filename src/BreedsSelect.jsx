// @ts-check

import PropTypes from 'prop-types';
import { useState } from 'react';

// @ts-ignore
export const BreedsSelect = ({ breeds, onChange }) => {
  //console.log(breeds)

  /*if (!Array.isArray(breeds)) {
    return <p>Error: breeds data is not an array</p>;
  }*/

  const breedsArray = Object.keys(breeds); // オブジェクトデータを配列に変換
  //console.log(breedsArray) // debug

  const [selectedBreed, setSelectedBreed] = useState('')

  // @ts-ignore
  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value)
    console.log('Selected: ' + event.target.value)
    onChange(event.target.value)
  }

  return (
    <>
      <span>select breed: </span>
      <select value={selectedBreed} onChange={handleSelectChange}>
        {/*<option value="">1</option>
        <option value="">2</option>*/}
        {breedsArray.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </>
  )
}



BreedsSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BreedsSelect