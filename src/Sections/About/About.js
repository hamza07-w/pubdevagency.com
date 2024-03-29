import React from 'react'
import { AboutItem } from '../../Components'
import { banner } from '../../assets'
import { faBullseye, faCircleCheck, faCodeBranch, faGlobe, faHeadset, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className="container my-24 mx-auto px-6 md:px-32">
      <section className="mb-32 flex flex-col space-y-6">
        <img src={banner} className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="about us" />
				<AboutItem
					icon={faBullseye}
					title="مهمتنا: قيادة عملك إلى العالم الرقمي "
					desc="في وكالة PupDev ، نحن متحمسون لتحويل الأعمال إلى علامات تجارية رقمية مزدهرة. مهمتنا بسيطة: تحويل كل عمل تجاري إلى قصة نجاح عبر الإنترنت. في عالم اليوم سريع الخطى ، يعد إنشاء وجود قوي عبر الإنترنت أمرًا ضروريًا للوصول إلى جمهور أوسع ، وتعزيز صورة علامتك التجارية ، ودفع النمو المستدام."
				/>
				<AboutItem
					icon={faCircleCheck}
					title="التحول الرقمي: طريقك إلى النجاح"
					desc="في مشهد رقمي دائم التطور ، نتفهم أهمية البقاء في الطليعة. فريق المطورين الخبراء لدينا مكرس لتوجيه أعمالك من خلال تحول رقمي سلس. سواء كنت شركة ناشئة تسعى إلى تأسيس وجودك عبر الإنترنت أو مؤسسة راسخة تتطلع إلى تجديد استراتيجياتك الرقمية ، فنحن نوفر لك ما تحتاجه."
				/>
				<AboutItem
					icon={faCodeBranch}
					title="التقنيات الحديثة"
					desc="نعتقد أن تسخير قوة التقنيات المتطورة هو المفتاح لإطلاق نجاح لا مثيل له. لدينا فريق من المطورين الموهوبين على دراية جيدة بأفضل التقنيات الحديثة ، مما يضمن أن الحلول الرقمية الخاصة بك ليست مبتكرة فحسب ، بل هي أيضًا مناسبة للمستقبل. من مواقع الويب سريعة الاستجابة إلى تطبيقات الهاتف المحمول المليئة بالميزات ، نقوم بتخصيص خدماتنا وفقًا لاحتياجاتك الفريدة."
				/>
				<AboutItem
					icon={faPeopleGroup}
					title="نجاحك هو أولويتنا"
					desc="نحن نفخر بنجاحك. كشركاء رقميين مخصصين لك ، نحن ملتزمون بتقديم نتائج استثنائية. يضمن نهجنا الشامل لتطوير الويب والتسويق أن يتم تحسين كل جانب من جوانب تواجدك عبر الإنترنت لتحقيق النجاح. من التصاميم الجذابة إلى استراتيجيات التسويق القائمة على البيانات ، فإن فريقنا مجهز لرفع علامتك التجارية إلى آفاق جديدة."
				/>
				<AboutItem
					icon={faHeadset}
					title="دعم على مدار 24 ساعة: نحن نوفر لك التغطية"
					desc="من خلال فهم الطبيعة العالمية للأعمال ، نقدم دعمًا على مدار الساعة لمعالجة أي مخاوف أو مشكلات قد تنشأ. يضمن الدعم الذي نقدمه على مدار 24 ساعة أنك لست وحدك في رحلتك الرقمية. معنا بجانبك ، يمكنك أن تطمئن إلى أن عملك على الإنترنت في أيد أمينة ، ومستعد دائمًا للازدهار في العالم الرقمي."
				/>
				<AboutItem
					icon={faGlobe}
					title="انضم إلينا في احتضان المستقبل الرقمي"
					desc="ندعوك للشروع في رحلة تحويلية مع وكالة PupDev. دعنا نعمل معًا لإنشاء حضور مؤثر عبر الإنترنت يأسر جمهورك ، ويدفع النمو ، ويعزز مكانتك كمتقدم رقمي. ثق بخبرتنا ، واحتضن المستقبل الرقمي ، وشاهد عملك يزدهر كما لم يحدث من قبل."
				/>
      </section>
    </div>
  )
}

export default About