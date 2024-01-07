import React from 'react'
import { Title } from '../../Components'

const Contact = () => {
	return (
		<section className="bg-white">
			<div className="md:container md:mx-auto flex flex-col-reverse md:flex-row justify-items-center items-center">
				<div className="md:w-1/3 h-[700px] shadow-lg">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016.825190446883!2d-13.1703785!3d27.1299376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc370d8b2bb07d09%3A0x9158232ee54cdaed!2sCafe%20l'escale!5e0!3m2!1sen!2s!4v1563012822082!5m2!1sen!2s"
					className="left-0 top-0 h-full w-full"
					frameborder="0"
					allowfullscreen>
					</iframe>
				</div>
				<div className="md:w-2/3 py-8 lg:py-16 container mx-auto px-6 md:px-0 max-w-screen-md">
					<Title
						name="ابدأ مشروعك الآن!"
					/>					
					<p dir="rtl" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
						أنت على بعد خطوة واحدة من زيادة مبيعاتك وبناء علامتك التجارية. املأ النموذج وسنتصل بك.
					</p>
					<form action="#" className="space-y-4">
						<div>
							<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">عنوان البريد الإلكتروني</label>
							<input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
						</div>
						<div>
							<label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">الهاتف</label>
							<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
						</div>
						<div>
							<label for="service" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">الخدمة</label>
							<select id="service" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
								<option>موقع التجارة الإلكترونية</option>
								<option>تصميم وبناء المواقع</option>
								<option>موقع معرض الاعمال</option>
								<option>تطبيق لإدارة مشروعك</option>
								<option>تحسين محركات البحث</option>
								<option>التسويق الالكتروني</option>
								<option>خدمة أخرى</option>
							</select>
						</div>
						<div className="sm:col-span-2">
							<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">صف لنا الخدمة التي تريدها</label>
							<textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
							</textarea>
						</div>
						<button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
							إرسال	
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact