
import React, { Component } from 'react'
import { Process, Title } from '../../Components'
import Slider from "react-slick";

export default class Processes extends Component {

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

    return (
			<section className="">
				<div className="container mx-auto px-2 md:px-6 py-8 items-center overflow-hidden">
					<Title
							name="مراحل العمل"
						/>
					<div className="py-8">
						<Slider {...settings}>
							<Process
								name="المعلومات"
								number="1"
							/>
							<Process
								name="التخطيط"
								number="2"
							/>
							<Process
								name="التطوير"
								number="3"
							/>
							<Process
								name="الاختبار"
								number="4"
							/>
							<Process
								name="الإطلاق"
								number="5"
							/>
							<Process
								name="التحسين"
								number="6"
							/>
						</Slider>
					</div>
				</div>
			</section>	
    );
  }
}

