import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { startuplife, wait_in_line, dashboard } from "../../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { HeroSection } from '../../Components';
import './Header.css'

export default class Header extends Component {

  render() {
	var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
	  autoplay: true,
	  autoplaySpeed: 4000,
      initialSlide: 0,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
	  rtl: true
    };

    return (
	    <>
		<div class="py-8">
			{/* <div className="main"></div> */}
			<div className="md:container mx-auto px-6 pt-12 items-center overflow-hidden">
				<Slider {...settings}>
					<HeroSection
						title="اجعل"
						subtitle="رؤيتك حقيقة"
						text="من خلال تصميم موقع ويب المذهل ، وحلول تطوير الويب المخصصة ، والتركيز على تجربة المستخدم ، نقوم بإنشاء تجارب عبر الإنترنت تجذب انتباه جمهورك."
						image={wait_in_line}
					/>
					<HeroSection
						title="أطلق"
						subtitle="العنان لقدراتك الرقمية"
						text="اكتشف قوة التواجد الآسر عبر الإنترنت من خلال خدمات تصميم وتطوير مواقع الويب المتخصصة لدينا. "
						image={startuplife}
					/>
					<HeroSection
						title="هل أنت"
						subtitle=" صاحب شركة ناشئة في المغرب"
						text="قم بتبسيط عملياتك وزيادة الإنتاجية من خلال تطبيقات إدارة الأعمال المخصصة لدينا. تم تصميم تطبيقاتنا لتلبية متطلباتك المحددة ، وتمكنك من إدارة المهام والموارد والعمليات بسلاسة ، مما يعزز النمو والكفاءة."
						image={dashboard}
					/>
				</Slider>
				<div className="flex justify-center mt-2">
					<FontAwesomeIcon icon={faAngleDown} className="text-blue-600 animate-bounce" style={{ fontSize: '50px' }}/>
				</div>
			</div>
		</div>
		{/* <div className="bg-slate-100">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#1d4ed8" fill-opacity="0.87" d="M0,224L120,213.3C240,203,480,181,720,149.3C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
			</svg>
		</div> */}
		</>
    );
  }
}
