import React, { useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Tab = () => {
    const nameRef=useRef('')
    const ageRef =useRef('')
    const mobileRef =useRef('')
    const emailRef =useRef('')
    const businessRef=useRef('')
    const gtsRef   =useRef('')
    const addressRef=useRef('')
    const loanRef =useRef('')
    const interestRef=useRef('')
    const tenureRef=useRef('')
    
    const handleSumbmit = (e) => {
        e.preventDefault()
        const email=emailRef.current.value   
        const name=nameRef.current.value   
        const age=ageRef.current.value   
        const mobile=mobileRef.current.value   
        const business=businessRef.current.value
        const gts =gtsRef.current.value
        const address=addressRef.current.value
        const loan =loanRef.current.value
        const interest=interestRef.current.value
        const tenure =tenureRef.current.value
       
        // console.log(email,name,age,mobile,business,gts,address,loan,interest,tenure)
       
        const data={
           Email:email,
           Name:name,       
           Age:parseInt(age),
           Mobile:mobile,
           BusinessName:business,
           Gts: gts,
           Address:address,
           LoanAmount:parseInt(loan),
           Interest:100/parseInt(interest),
           Loantenure:tenure,

         }

       
        if(data){

       
         fetch('https://warm-sands-67163.herokuapp.com/deatail',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
         }).then(res=>res.json())
         .then(data=>{
            // console.log(data)
             if(data.acknowledged==true){
               return toast('succes fully Data Add')
             }
            else{
                return toast('error')
            }
         })

        }  

   
     console.log(data)       
       
       
       
       
        e.target.reset()

    }

    return (
        <div className='container mx-auto mt-5'>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"> Personal details</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> Business details</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Loan Application details</button>
                </li>
            </ul>




            <form onSubmit={handleSumbmit}>
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active mx-auto" id="home" role="tabpanel" aria-labelledby="home-tab">
                              { /* Personal details */ }
                        <div className="row g-3 mt-5 ">
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label " >Name</label>
                                <input  ref={nameRef} type="name" className="form-control" required id="inputEmail4" />
                            </div> <br/>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label">Age</label>
                                <input ref={ageRef} type="number" className="form-control" required id="inputPassword4" />
                            </div>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label"> Mobile No</label>
                                <input ref={mobileRef} type="number" className="form-control"    required id="inputPassword4"  />
                            </div>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label">Email</label>
                                <input type="email" ref={emailRef}  className="form-control" id="inputPassword4" required />
                            </div>
                           
                           
                        </div>



                    </div>
                     { /* Business details */ }
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row g-3 mt-5 ">
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label"> Applicant’s Business Name</label>
                                <input ref={businessRef} required type="text" className="form-control" id="inputEmail4"  />
                            </div> <br/>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label"> GST No</label>
                                <input ref={gtsRef} type="number" className="form-control" id="inputPassword4"  required  />
                            </div>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label">Address</label>
                                <input ref={addressRef} type="text" className="form-control" id="inputPassword4"  required  />
                            </div>
                           
                           
                           
                        </div>


                    </div>
                    { /* loan details */ }
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="row g-3 mt-5 ">
                            <div className="col-md-3">
                                <label for="inputEmail4" className="form-label">Loan amount</label>
                                <input ref={loanRef} type="number" className="form-control" id="inputEmail4"  required  />
                            </div> <br/>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label">Interest Rate</label>
                                <input ref={interestRef} type="number" className="form-control" id="inputPassword4"  required  />
                            </div>
                            <div className="col-md-3">
                                <label for="inputPassword4" className="form-label"> Loan tenure</label>
                                <input ref={tenureRef} type="number" className="form-control" id="inputPassword4"  required  />
                            </div>
                        
                      </div>
                     
                    </div>
                </div>
                <input className='mt-5 btn btn-primary' type='submit' value='submit'/>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Tab
