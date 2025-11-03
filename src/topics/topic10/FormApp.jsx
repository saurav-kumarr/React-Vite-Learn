import React , { useState } from "react";

function FormApp() {

    const [formData, setFormData] = useState({
        name: '',
        email:''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = 'Name is required';
        }
        return newErrors;
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        } else {
            console.log('Form Data Submitted ', formData);
        }
        

    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if(errors[names]) {
            const newErrors = {...errors};
            delete newErrors[names];
            setErrors(newErrors);
        }
    };

    return(
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit}>
                <label >
                    Name:
                    <input type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}>
                    </input>
                    <br />
                    {errors.name && <span>{errors.name}</span>}
                    <br />
                </label>

                <label >
                    Email:
                    <input type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}>
                    </input>
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default FormApp;