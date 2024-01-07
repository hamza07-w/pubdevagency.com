import React from 'react'

const Work = (props) => {
  return (

		<div dir="rtl" className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
		<div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
			<img src={props.image} alt="" className="w-full rounded-t-lg" />
			<a href="#!">
				<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
			</a>
			<svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#fff" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,229.3C672,245,768,267,864,282.7C960,299,1056,309,1152,309.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
		</div>
		<div className="p-6">
			<h5 className="mb-4 text-lg font-bold logo">{props.name}</h5>
			<p className="mb-6">
				{props.desc}
			</p>
			<a href="#!" data-te-ripple-init data-te-ripple-color="light"
				className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-blue-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out">
					اقرأ المزيد
			</a>
		</div>
	</div>

  )
}

export default Work