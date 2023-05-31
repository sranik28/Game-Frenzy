import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { useAuthGlobally } from '../context/AuthProvide';
import useTitle from '../hooks/UseTitle';
import { useParams } from 'react-router-dom';


const EditToy = () => {

    useTitle("Edit Toy")

    const { user } = useAuthGlobally();

    const { id } = useParams();
    const [viewData, setViewData] = useState({});

    const { photo_url, name, sub_category, price, rating, quantity, description } = viewData;


    useEffect(() => {
        fetch(`https://game-frenzy.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => setViewData(data))
    }, [id])

    const updateToy = (e) => {
        e.preventDefault()
        const form = e.target
        const photo_url = form.toy_image.value
        const name = form.name.value
        const seller_name = form.seller_name.value
        const seller_email = form.email.value
        const sub_category = form.sub_category.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const toy = {
            photo_url,
            name,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            quantity,
            description
        }

        fetch(`https://game-frenzy.vercel.app/update/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: '',
                        text: "Data Updated Successfully!",
                        icon: 'success',
                        confirmButtonColor: '#B2A4FF',
                        confirmButtonText: 'ok'
                    })

                }
            })
    }


    return (
        <main className='container px-3'>
            <hr className="w-full my-3" />
            <form onSubmit={updateToy} className=" py-5" >
                <div className="text-center my-10">
                    <h2 className="text-3xl underline font-bold">Edit <span className='text-[#B2A4FF]'>Toy</span></h2>
                </div>

                <section className="md:grid md:grid-cols-2 gap-3 w-full">

                    <div className="w-full my-2">
                        <span className="block font-bold">Toy Image</span>
                        <input name="toy_image" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" placeholder="Toy image url" defaultValue={photo_url} />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Product Name</span>
                        <input name="name" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" placeholder="toy Name" defaultValue={name} />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller name</span>
                        <input name="seller_name" defaultValue={user?.displayName && user?.displayName} type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Seller Email</span>
                        <input name="email" type="text" defaultValue={user?.email && user?.email} className="w-full px-4 py-3 outline-0 mt-3 rounded border" autoComplete="off" disabled />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Sub-Category</span>
                        <input name="sub_category" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" placeholder="Sub Category" defaultValue={sub_category} />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Price</span>
                        <input name="price" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" defaultValue={price} placeholder="Price" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Rating</span>
                        <input name="rating" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" defaultValue={rating} placeholder="Rating" />
                    </div>
                    <div className="w-full my-2">
                        <span className="block font-bold">Available Quantity</span>
                        <input name="quantity" type="text" className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" autoComplete="off" placeholder="Avillable Quantity" defaultValue={quantity} />
                    </div>
                    <div className="w-full my-2 md:col-span-2">
                        <span className="block font-bold">Detail Description</span>
                        <textarea name="description" className="w-full h-[100px] resize-none px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg" placeholder="Description" defaultValue={description}> </textarea>
                    </div>

                </section>

                <div >
                    <button className="px-4 bg-[#B2A4FF] hover:bg-[#AA77FF] block mt-10 py-3 rounded text-white w-full" type="submit">Update Toy</button>
                </div>

            </form>
        </main>
    );
};

export default EditToy;