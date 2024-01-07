import React from 'react'
import { ServiceCard, Title } from '../../Components'
import { landing, portfolio, seo, ecommerce, webdev, marketing, welcome } from '../../assets'
import './Services.css'

const Services = () => {

	// const services = [
	// 	{
	// 		'موقع التجارة الإلكترونية':'يبسط خبراؤنا عملك كتاجر من خلال تزويدك بأفضل قوالب مواقع الويب التي تقدم عرضًا جذابًا لمنتجات علامتك التجارية ، مع دمج جميع الخيارات والوظائف الضرورية للدفع أو التسليم للحصول على تجربة شراء جيدة.'
	// 	},
	// 	{
	// 		'إنشاء مواقع الويب':''
	// 	}
	// ]

  	return (
		<section id="services">
			<div className="px-6 py-8 items-center overflow-hidden">
				<div className="py-0">
					<Title
						name="خدماتنا"
					/>
					<div className="flex justify-around">
						<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 py-8">
							<ServiceCard
								image={ecommerce}
								name="مواقع التجارة الإلكترونية"
								desc="حوّل عملك إلى متجر مزدهر عبر الإنترنت من خلال حلول التجارة الإلكترونية الآمنة والقابلة للتطوير ، مما يبسط تجربة التسوق لعملائك."
							/>
							<ServiceCard
								image={webdev}
								active={true}
								name="تصميم وبناء المواقع"
								desc="من خلال تصميم مواقع تفاعلية مصممة خصيصًا لعلامتك التجارية ، نضمن تجربة مستخدم سلسة تترك انطباعًا دائمًا."
							/>
							<ServiceCard
								image={portfolio}
								name="موقع معرض الاعمال"
								desc="اعرض موهبتك بأناقة من خلال تصميمات معرض الاعمال الجذابة لدينا ، مع إبراز مهاراتك وإنجازاتك بشكل فعال."
							/>
							<ServiceCard
								image={landing}
								name="تطبيق لإدارة مشروعك"
								desc="قم بتبسيط العمليات وزيادة الإنتاجية من خلال تطبيقات إدارة الأعمال المخصصة لدينا ، والمصممة خصيصًا لتلبية متطلباتك الفريدة."
							/>
							<ServiceCard
								image={seo}
								name="تحسين محركات البحث"
								desc="قم بزيادة الرؤية عبر الإنترنت وتفوق على المنافسين من خلال خدمات تحسين محركات البحث الفعالة لدينا ، وجذب حركة المرور العضوية وتحسين تصنيفات محرك البحث."
							/>
							<ServiceCard
								image={marketing}
								name="التسويق الالكتروني"
								desc="يمكنك الوصول إلى جمهورك المستهدف وتعزيز الوعي بالعلامة التجارية من خلال استراتيجيات التسويق الرقمي القائمة على النتائج ، والمصممة خصيصًا لجذب تحويلات قيمة."
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services