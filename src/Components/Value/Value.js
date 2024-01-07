import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Value.css'

const Value = (props) => {
  return (
	<div className="flex">
		<FontAwesomeIcon icon={props.icon} className="text-blue-600 w-8 md:w-12" style={{ fontSize: '46px' }}/>
		<div className="flex flex-col space-y-2 mx-4">
			<h1 className="text-lg md:text-2xl val text-slate-900 mx-2">{props.name}</h1>
			<p className="text-slate-500">
				{props.desc}
			</p>
		</div>
	</div>
  )
}

export default Value