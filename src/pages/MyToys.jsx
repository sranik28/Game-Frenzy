import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/UseTitle';
import UpdateToy from '../components/UpdateToy';
import { useAuthGlobally } from '../context/AuthProvide';
import Swal from 'sweetalert2';
import Select from 'react-select'

const MyToys = () => {

    const { user } = useAuthGlobally();

    useTitle('My Toys')

    const [updateToy, setUpdateToy] = useState([]);
    const [deleteConfirm, setDeleteConfirm] = useState(0);
    const [selectedOption, setSelectedOption] = useState("descending");

    const url = `https://game-frenzy.vercel.app/seller?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUpdateToy(data)
            })
    }, [url, deleteConfirm])



    const deleteToy = (id) => {
        const isDelete = confirm("Are you sure you want to delete this?");
        if (isDelete) {

            fetch(`https://game-frenzy.vercel.app/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        setDeleteConfirm(deleteConfirm + 1)
                        Swal.fire({
                            title: '',
                            text: "Data Delete Successfully!",
                            icon: 'Delete',
                            confirmButtonColor: '#B2A4FF',
                            confirmButtonText: 'ok'
                        })
                    }
                })
        }
    }

    const options = [
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending', label: 'Descending' },
    ]


    useEffect(() => {
        fetch(`https://game-frenzy.vercel.app/sort?sortby=${selectedOption.value}&email=${user.email}`)
            .then(res => res.json())
            .then(data => setUpdateToy(data))
    }, [selectedOption])



    return (
        <div className='container my-12'>

            <section className="mr-auto my-10 min-w-[200px] md:w-1/3">
                <Select defaultValue={selectedOption}
                    onChange={setSelectedOption} options={options} />
            </section>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full min-w-[900px]">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy'S Name</th>
                            <th>sub-category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            updateToy.map((toys) => <UpdateToy key={toys._id} toys={toys} deleteToy={deleteToy} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;