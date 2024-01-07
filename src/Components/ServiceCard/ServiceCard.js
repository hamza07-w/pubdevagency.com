import React from 'react'

const ServiceCard = (props) => {
  return (
	<div className={`shadow flex flex-col items-center justify-around p-4 text-slate-900 ${props.active ? 'bg-slate-100':'bg-slate-200'}`}>
			{/* <div className="absolute w-full h-full text-white transform scale-x-105 scale-y-95 bg-sky-600 rounded-xl -rotate-2 c2"></div>
			<div className="absolute w-full h-full text-white transform scale-x-105 scale-y-95 bg-sky-600 rounded-xl rotate-2 c2"></div>
			<div className="absolute w-full h-full transform scale-x-105 scale-y-95 bg-slate-100 rounded-xl c2"></div> */}
			<div className="p-2 z-10 flex justify-center rounded-full">
				<img src={props.image} className="w-2/3" alt="Web Dev" />
			</div>
			<h3 className={`z-10 p-2 text-lg md:text-2xl ${props.active ? 'text-blue-600':'text-blue-600'} font-bold`}>{props.name}</h3>
			<div className={`z-10 p-2 text-sm md:text-lg text-center ${props.active ? 'text-slate-900':'text-slate-900'}`}>
				{props.desc}
			</div>
		</div>
  )
}

export default ServiceCard