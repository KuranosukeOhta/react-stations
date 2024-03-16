// @ts-check

import PropTypes from 'prop-types';

export const BreedsSelect = ({ breeds }) => {
  console.log(breeds)

  /*if (!Array.isArray(breeds)) {
    return <p>Error: breeds data is not an array</p>;
  }*/

  const breedsArray = Object.keys(breeds); // オブジェクトデータを配列に変換
  console.log(breedsArray) // debug

  return (
    <>
      <span>select breed: </span>
      <select name="Select:" id="">
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
  breeds: PropTypes.array.isRequired
}

export default BreedsSelect
