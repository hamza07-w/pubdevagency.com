import React from 'react'

const HeroSection = (props) => {
  return (
    <section>
        <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 justify-around overflow-hidden">
            <div className="max-w-2xl self-center flex flex-col space-y-6 text-center">
                <div className="font-extrabold tracking-tight leading-none">
                    {/* <span className="text-white md:first-letter:first-line md:text-7xl text-4xl">{props.title}</span> */}
                    <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">{props.title} {props.subtitle}</span>
                </div>
                <p className="font-light text-slate-900 md:text-xl text-sm" dir="rtl">
                    {props.text}
                </p>
                <div className="flex justify-center md:justify-center">
                    <a href="." className="inline-flex items-center justify-center md:px-5 md:py-2 px-3 py-2 mr-3 md:text-lg text-sm font-medium text-center bg-blue-600 rounded-lg bg-primary-700 text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-all duration-900 hover:px-6">
                        ابدأ اليوم  
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="." className="inline-flex items-center justify-center md:px-5 md:py-2 px-3 py-2 md:text-lg text-sm font-medium text-center text-slate-900 border border-slate-900 rounded-lg focus:ring-4 focus:ring-gray-100 transition-all duration-900 hover:hover:px-6">
                        انظر أعمالنا    
                    </a> 
                </div>
            </div>
            <div className="max-w-lg flex justify-center">
                <img className="w-2/3 md:w-full" src={props.image} alt="join svg" />
            </div>                
        </div>
    </section>
  )
}

export default HeroSection