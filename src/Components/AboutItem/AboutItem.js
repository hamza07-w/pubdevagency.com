import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AboutItem = (props) => {
  return (
		// <div >
		// 	<h1 className="mb-6 text-3xl font-bold text-blue-600 flex space-x-6 items-center">
		// 		<FontAwesomeIcon icon={props.icon} />
		// 		<span className="mx-4">{props.title}</span>   
		// 	</h1>
		// 	<p className="text-lg max-w-5xl">
		// 		{props.desc}
		// 	</p>
		// </div>
		<div className="flex">
			<FontAwesomeIcon icon={props.icon} className="text-blue-500 w-8 md:w-12" style={{ fontSize: '30px' }}/>
			<div className="flex flex-col space-y-2 mx-4">
				<h1 className="text-lg md:text-3xl font-bold text-blue-500">{props.title}</h1>
				<p className="text-sm text-slate-600 md:text-lg max-w-5xl">
					{props.desc}
				</p>
			</div>
		</div>
	)
}

export default AboutItem