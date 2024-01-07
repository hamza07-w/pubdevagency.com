import React from 'react'

const Process = (props) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center justify-items-center mx-auto w-40 h-40 rounded-full bg-blue-600 border-4 border-blue-600 text-white hover:bg-transparent hover:text-blue-600 transition-all duration-500">
        <span className="text-slate-100/40 absolute text-5xl md:text-8xl z-0">
            {props.number}
        </span>
        <h1 className="text-xl md:text-3xl">{props.name}</h1>
    </div>
  )
}

export default Process