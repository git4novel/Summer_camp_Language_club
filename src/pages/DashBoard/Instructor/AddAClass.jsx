import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
    return (
        <div className="p-2 lg:my-6">
            <h2 className="mt-3 font-semibold text-center">Add A Class</h2>
            <form className="grid grid-cols-1 p-1 md:grid-cols-2 gap-1 rounded-lg border-2 border-slate-500" onSubmit={handleSubmit(onSubmit)}>
            {/* class name  */}
            <div className="form-control w-full mb-3">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("classname", { required: true, maxLength: 60 })}
                    className="input input-bordered w-full" />
            </div> 
            {/* image input  */}
            <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
            {/*  */}
            <div className="form-control w-full mb-3">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("classname", { required: true, maxLength: 60 })}
                    className="input input-bordered w-full" />
            </div>

            <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
        </form>
        </div>
    );
};

export default AddAClass; 
