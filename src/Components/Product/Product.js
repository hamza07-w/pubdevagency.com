import React from 'react'

const Product = (props) => {
  return (

    <div className="group relative text-center rounded-lg py-4 flex flex-col space-y-6 justify-around">
        <div className="w-full overflow-hidden rounded-md group-hover:scale-95 transition-all duration-500">
            <img src={props.image} alt="Front of men&#039;s Basic Tee in black." className="w-full object-cover object-center" />
        </div>
        <div className="mt-4 px-6">
            <div className="text-xl text-black">
                <div className="flex items-center justify-items-center justify-between"> 
                    <p className="mt-1 text-lg text-gray-500">{props.name}</p>
                    <div dir="rlt">
                        <p className="text-lg font-medium text-gray-900">{props.price} درهم</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-6">
            <button className="px-6 py-2 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white hover:opacity-80 text-black w-full">شراء</button>
        </div>
    </div>
  )
}

export default Product