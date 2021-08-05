import React, { useState } from 'react';


    const Contact = () => {
        const [data, setData] = useState({
            name:"",
            phone:"",
            email:""
        })

    

    const onSubmit = (e) => {
        e.preventDefault();
        alert(` 
        name: ${data.name} 
        phone number: ${data.phone}
        email: ${data.email}
        `);
    }

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]:value
            }
        })
    }

    

    return (
        <>
            <div className="my-4">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                      
                        <form onSubmit={onSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="name"
                                    value={data.name }
                                    onChange={inputEvent}
                                    placeholder="Enter your name" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone NUmber</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={ data.phone}
                                    onChange={inputEvent}
                                    placeholder="Enter your phone number" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="Enter your rmail" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;