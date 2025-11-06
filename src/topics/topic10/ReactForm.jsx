import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function ReactForm(){
    
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
        mode: 'onChange'
    });

    const existingUsernames = ['admin', 'user123', 'john']
    const checkIfUsernameExist = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return existingUsernames.includes(username);
    }

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    // console.log(watch('name'));
    // console.log(watch('email'));
    const watchedName = watch('name');
    const watchedEmail = watch('email');

    useEffect(() => {
        console.log('Name', watchedName);
    }, [watchedName]);

    useEffect(() => {
        console.log('Name', watchedEmail);
    }, [watchedEmail]);

        // Custom validation
    const validateName = (value) => {
        if(value !== 'admin') {
            return 'Only admin is allowed';
        }
        return true;
    }

    return(
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label >
                    Name:
                    {/* <input {...register('name', {required: true, minLength: 2})} /> */}
                    <input {...register('name',
                                 {required: 'Name is required',
                                 minLength: {value: 2, 
                                            message: 'Name should be atleast 2 Character'
                                                },validate: validateName,
                                                checkIfUsernameExist: async(value) => {
                                                    const exist = await checkIfUsernameExist(value)
                                                    return !exist || 'Username already taken';
                                                }
                                                })} />
                </label>
                {errors.name && <p>{errors.name.message}</p>}
                <br />
                {/* {errors.name && <p>Name is required and should be atleast 2 characters</p>} */}

                <label >
                    Email:
                    <input {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                </label>
                {errors.email && <p>Email is Required</p>}
                <br />

                <label>
                 Password:
                 <input type="password" {...register('password', {
                    required: true,
                    minLength: 2,
                 })} > 
                 </input>   
                </label>
                {errors.password && <p>{errors.password.message}</p>}
                 <br />

                <label>
                 Confirm Password:
                 <input type="password" {...register('confirmPassword', {
                    required: true,
                    minLength: 2,
                    validate: value => value === watch('password') || 'Password do not match'
                 })} > 
                 </input>   
                </label>
                 {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                 <br />

                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    )
}

export default ReactForm;