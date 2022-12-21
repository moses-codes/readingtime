import { React, useState } from "react";

import { useForm } from 'react-hook-form'

export default function ManualEntry() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}

            <div className="block">
                <h4>Title:</h4>
                <input className="border-solid border-2 border-blue-600 rounded pl-3" defaultValue="title" {...register("title")} />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div className="block">
                <h4>Author:</h4>
                <input className="block border-solid border-2 border-blue-600 rounded pl-3"  {...register("author", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="block">
                <h4>Pages:</h4>
                <input className="block border-solid border-2 border-blue-600 rounded pl-3"  {...register("numPages", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="block">
                <h4>Link to cover</h4>
                <input className="block border-solid border-2 border-blue-600 rounded pl-3"  {...register("cover", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <input className="block" type="submit" />
        </form>
    );


}