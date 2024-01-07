import React from 'react'
import { Product, Title } from '../../Components'
import { js_tshirt, laravel_jacket, laravel_tshirt, nodejs_tshirt } from '../../assets'

const Products = () => {
  return (
    <section id="products" className="bg-white py-6">
      <Title
				name="منتجاتنا"
			/>
    	<div className="container mx-auto px-4 py-16">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-28">
					<Product
						image={js_tshirt}
						name="JS T-Shirt"
						price="45"
					/>
					<Product
						image={nodejs_tshirt}
						name="NodeJs T-Shirt"
						price="60"
					/>
					<Product
						image={laravel_tshirt}
						name="Laravel T-Shirt"
						price="43"
					/>
					<Product
						image={laravel_jacket}
						name="Laravel Jacket"
						price="55"
					/>
				</div>
			</div>
    </section>
  )
}

export default Products