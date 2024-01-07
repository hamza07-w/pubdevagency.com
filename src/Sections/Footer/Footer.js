import React from 'react'

const Footer = () => {
  return (

    <footer className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex items-center justify-center justify-items-center md:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <h1 className="self-center logo text-xl md:text-5xl font-semibold whitespace-nowrap hidden md:flex flex-row-reverse">
                        <span className="text-slate-900">pub</span>
                        <span className="text-blue-700">dev</span>
                    </h1>
                </a>
                <ul className="flex flex-wrap mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="." className="mr-4 hover:underline md:mr-6">معلومات عنا</a>
                    </li>
                    <li>
                        <a href="." className="mr-4 hover:underline md:mr-6">سياسة الخصوصية</a>
                    </li>
                    <li>
                        <a href="." className="mr-4 hover:underline md:mr-6 ">اتصل بنا</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span dir="ltr" className="block text-sm text-gray-500 text-center"><a href="https://flowbite.com/" class="hover:underline">pubdev agency</a>© All Rights Reserved 2023.</span>
        </div>
    </footer>



  )
}

export default Footer