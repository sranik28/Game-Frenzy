import product1 from '../assets/best-product/product1.jpg'
import product2 from '../assets/best-product/product2.png'
import product3 from '../assets/best-product/product3.png'
import product4 from '../assets/best-product/product4.png'
import product5 from '../assets/best-product/product5.png'
import product6 from '../assets/best-product/product6.png'


const Gallery = () => {
    return (
        <main className='container my-44'>
            <h2 className='text-center font-bold text-4xl mb-20 underline'>Our <span className='text-[#AA77FF]'>Gallery</span></h2>
            <div className='grid md:grid-cols-3 gap-5 justify-center'>
                <div data-aos="fade-down"  >
                    <img className='w-72 rounded-md transition-transform duration-1000 group-hover:rotate-3 group-hover:scale-125' src={product1} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img className='w-72 rounded-md' src={product2} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img className='w-72 rounded-md' src={product3} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img className='w-72 rounded-md' src={product4} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img className='w-72 rounded-md' src={product5} alt="" />
                </div>
                <div data-aos="fade-down">
                    <img className='w-72' src={product6} alt="" />
                </div>
            </div>
        </main>
    );
};

export default Gallery; 
