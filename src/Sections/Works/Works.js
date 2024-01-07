import React from 'react'
import { Title } from '../../Components'
import Work from '../../Components/Work/Work'
import { blogbdariga, brshop, ecomatic, ecomdashboard, fives, iptvcenter, larablog, perfo3mar, portfolio, portfolio_, quizai, tbdom } from '../../assets'

const Works = () => {
  return (

		<div id="works" className="container px-6 py-12 mx-auto" dir="rtl">
			<section className="text-right">
		 		<Title
					name="اعمالنا"
				/>
				<div className="grid gap-6 lg:grid-cols-3 py-12">
					<Work 
						name="IPTV Center"
						image={iptvcenter}
						desc="منصة عبر الإنترنت تقدم اشتراكات IPTV متميزة ، وتوفر مجموعة واسعة من القنوات التلفزيونية الحية ، والمحتوى حسب الطلب ، وتجارب البث السلسة للمشاهدين في جميع أنحاء العالم."
					/>
					<Work 
						name="Ecomatic Solutions"
						image={ecomatic}
						desc="مزود حلول الطاقة الشمسية الخاص بك من أجل مستقبل مستدام. منتجات عالية الجودة وحلول مبتكرة للاحتياجات السكنية والتجارية."
					/>
					<Work 
						name="Berlin Shop Services"
						image={brshop}
						desc="وجهة لشراء اشتراكات Netflix واشتراكات أفضل منصات البث ، مما يوفر ترفيهًا لا نهاية له في متناول يدك."
					/>
					<Work
						name="LaraBlog"
						image={larablog}
						desc="مدونة متطورة مخصصة لمشاركة المقالات الثاقبة حول تكنولوجيا المعلومات وتطوير الويب ، وتمكين القراء بأحدث الاتجاهات والمعرفة في العالم الرقمي."
					/>
					<Work 
						name="Web Devloper Portfolio"
						image={portfolio_}
						desc="عرض رقمي يسلط الضوء على عمل الفرد أو الشركة ومهاراته وإنجازاته ، ويقدم عرضًا مقنعًا لقدراتهم للعملاء المحتملين أو أصحاب العمل"
					/>
					{/* <Work 
						name="Performance 3M"
						image={perfo3mar}
						desc="لوحة معلومات شاملة للنظام لصيانة الآلات البحرية في مرسى المغرب ، توفر تحديثات الحالة في الوقت الفعلي ، وجداول الصيانة ، وتحليلات الأداء لعمليات مبسطة وكفاءة مثالية."
					/> */}
					<Work 
						name="Blog Bdariga"
						image={blogbdariga}
						desc="مدونة تقدم مقالات ودروس تعليمية وتحديثات ثاقبة حول أحدث اتجاهات التكنولوجيا وتطوير البرامج والأمن السيبراني وأخبار تكنولوجيا المعلومات - يتم تسليمها جميعها بالدارجة ."
					/>					
					{/* <Work 
						name="TB DOM"
						image={tbdom}
						desc="أداة قوية تنظم بكفاءة وتتبع وتحليلات الحركات والخدمات البحرية لمرسى المغرب لبيانات الصادرات والواردات في ميناء العيون."
					/> */}
					{/* <Work 
						name="Audit les 5S"
						image={fives}
						desc="تطبيق ويب سهل الاستخدام يبسط وأتمت عملية تدقيق 5S ، مما يمكّن المستخدمين من إجراء وتتبع وتحليل تقييمات مؤسسة مكان العمل بسهولة لتحسين الكفاءة والسلامة."
					/> */}
					<Work 
						name="Quiz AI"
						image={quizai}
						desc="منصة مصممة خصيصًا للمعلمين لتقييم طلابهم بسهولة. الهدف الرئيسي من هذا التطبيق هو توفير أداة سهلة الاستخدام تسمح للمعلمين بالتفاعل مع النظام لإنشاء أسئلة اختبار بواسطة الذكاء الاصطناعي، والحصول على معلومات مفصلة عن تقدم الطالب الفردي ."
					/>
					<Work 
						name="Ecommerce Dashboard"
						image={ecomdashboard}
						desc="لوحة معلومات شاملة للتجارة الإلكترونية على شبكة الإنترنت تتعامل بسلاسة مع المنتجات الرقمية والمادية ، وتوفر منصة مركزية لإدارة المخزون ومعالجة الطلبات وتحليلات المبيعات."
					/>
				</div>
			</section>
		</div>

  )
}

export default Works