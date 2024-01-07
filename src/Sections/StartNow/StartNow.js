import React from 'react'
import './StartNow.css'

const StartNow = () => {
  return (
    <section className="py-20 startnow">
			<div className="md:container mx-auto flex flex-col justify-around items-center space-y-8">
				<h1 className="md:text-7xl text-4xl text-white">
					جاهز لزيادة العملاء ؟
				</h1>
				<h2 className="text-white text-xl text-center">
				حان الوقت لتتفوق على منافسيك وتتميز في السوق. سجل طلبك الآن ، صِف لنا طبيعة عملك وسنقوم بالرد عليك في أقرب وقت ممكن
				</h2>
				<a href="." className="inline-flex items-center justify-center md:px-5 md:py-2 px-4 py-2 mr-3 md:text-lg text-md font-medium text-center bg-blue-600 rounded-lg bg-primary-700 text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-all duration-900 hover:px-6">
				ابدأ الآن
				</a>
			</div>
    </section>
  )
}

export default StartNow