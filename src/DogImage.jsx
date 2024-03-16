// @ts-check

import "./App.css"

export const DogImage = ( props ) => {
  return (
    <>
      <img className="dogImg" src={props.imageUrl} />
    </>
  )
}