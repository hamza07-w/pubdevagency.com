import React from 'react'
import { Navbar, Contact, Footer, About } from '../../Sections'

const AboutUs = () => {
  return (
		<div className="bg-slate-50">
			<div className="scroll-smooth md:scroll-auto">
				<Navbar />
				<About />
				<Contact />
				<Footer />
			</div>
		</div>
  )
}

export default AboutUs