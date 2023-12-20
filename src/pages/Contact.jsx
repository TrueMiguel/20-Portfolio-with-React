// contact form
import { useState } from 'react';

const styleCard = {
    fontFamily: "'Courgette', cursive",
}

export default function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = { email, message };
        console.log(formData)
    }
    
    return(
        <div className='d-flex justify-content-center pt-5'>
            <form className='justify-content-center' onSubmit={handleSubmit} style={{width: '50%'}} >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" style={{...styleCard}}>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange}></input>
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" style={{...styleCard}}>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleMessageChange}></input>
            </div>

            <button type="submit" className="btn" style={{...styleCard, backgroundColor: '#AF6818'}}>Submit</button>
            </form>
    </div>
    )
}



{/* <div className='d-flex justify-content-center'>
            <div className='justify-content-center' style={{width: '50%'}}>
            <div className="mb-3 pt-3" >
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: '#3D2A19'}}>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: '#3D2A19'}}>Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
        </div> */}