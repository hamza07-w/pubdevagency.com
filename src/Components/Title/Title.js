import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
		<div className="flex flex-col justify-center items-center self-center space-y-4 py-2">
			<h1 className="text-blue-600 text-3xl font-extrabold sm:text-5xl">{props.name}</h1>
			<div className="bg-blue-600 rounded-full underline"></div>
		</div>
	)
}

export default Title