import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="">
      <section className="md:hidden">
          <div className="menu-wrap py-auto flex justify-center justify-items-center">
            <input type="checkbox" className="toggler" />
              <div className="hamburger">
                <div></div>
              </div>
                <div className="menu w-screen h-screen">
                    <div>
                        <div>
                            <ul>
                                <li><a href="/">الرئيسية</a></li>
                                <li><a href="/#services">خدماتنا</a></li>
                                <li><a href="/#works">اعمالنا</a></li>
                                <li><a href="/#products">منتجاتنا</a></li>
                                <li><Link to="/About">معلومات عنا</Link></li>
                                <li><Link to="/Contact">اتصل بنا</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>
      </section>
      <nav dir="ltr" className="md:container mx-auto relative md:py-5 py-2 md:flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href=".">
          <h1 className="md:pl-0 pt-1 pl-4 logo text-2xl md:text-6xl">
            <span className="text-slate-900">pub</span>
            <span className="text-blue-600">dev</span>
          </h1>
        </a>
        <ul dir="ltr" className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:mx-auto md:flex md:items-center md:w-auto md:space-x-12">
          <li><Link to="/About" className="text-xl text-slate-900 ">معلومات عنا</Link></li>
          <li><a className="text-xl text-slate-900 " href="/#works">اعمالنا</a></li>
          <li><a className="text-xl text-slate-900 " href="/#products">منتجاتنا</a></li>
          <li><a className="text-xl text-slate-900 " href="/#services">خدماتنا</a></li>
          <li><a className="text-xl text-slate-900 " href="/">الرئيسية</a></li>

        </ul>
        <Link className="hidden lg:inline-block px-4 py-2 transition-all duration-900 hover:px-6 text-lg font-medium text-center text-white bg-blue-700 rounded-full" to="/Contact">ابدأ مشروعك</Link>
      </nav>
    </div>
  )
}

export default Navbar