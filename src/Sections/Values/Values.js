import React from 'react'
import { Title, Value, ValueSlider } from '../../Components'
import { faCrown, faPeopleArrows, faRocket, faStopwatch } from '@fortawesome/free-solid-svg-icons'

const Values = () => {
	return (
		<div className="">
			<div className="container mx-auto px-6 flex flex-col space-y-6 md:flex-row justify-around items-center py-12">
				<div className="md:w-1/2">
					<Title
						name="قيمنا"
					/>
					<div className="grid grid-cols-1 gap-4 mt-4" dir="rtl">
						<Value
							icon={faStopwatch}
							name="الاستجابة"
							desc="فريقنا مسؤول عن إعطائك استجابة سريعة في غضون 24 ساعة كحد أقصى ، بالإضافة إلى الدعم الفعال لاحتياجاتك.  نريد أن نتفاعل مع قيودك."
						/>
						<Value
							icon={faCrown}
							name="الاحترافية"
							desc="يلتزم فريقنا بتنفيذ مشاريع عالية الجودة لعملائه. نتفوق على أنفسنا أكثر قليلاً كل يوم لنقدم لك العمل الذي يلبي توقعاتك. تتطلب التكنولوجيا الرقمية الكثير ، وكذلك أنت ، وكذلك نحن."
						/>
						<Value
							icon={faRocket}
							name="الأداء"
							desc="ندرس ونحلل مشروعك الرقمي من خلال حشد جميع مهاراتنا ومهارات موظفينا المتخصصين في مجالاتهم."
						/>
						<Value
							icon={faPeopleArrows}
							name="الثقة"
							desc="يرافقك فريقنا ويضمن جودة متابعة العملاء. يُعد تقديم الأفضل لك جزءًا لا يتجزأ من نهج العميل لدينا ، ولهذا السبب نظل بجانبك من بداية مشروعك إلى نهايته وطوال علاقة العميل ."
						/>
					</div>
				</div>
				<div className="md:w-1/2">
					<ValueSlider />
				</div>
			</div>
		</div>
	)
}

export default Values