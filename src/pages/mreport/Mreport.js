import React from 'react'
import { Sidemenu } from '../../components/menu/Sidemenu';
import './main.css'

const Mreport = () => {
    return (
        <>
            <div className="container">
                <Sidemenu id={2} />
                <div className="right-cont">
                    <div className="nav">
                        <h1>Missing Report</h1>
                    </div>
                    <hr />
                    <div className="mainSection">
                        <div className="row">
                            <div className="cards" style={{width:"100%",height:"auto"}}>
                                <form>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Missing Person Details</h3>
                                        </div>
                                        <div className="items">
                                            <span>UPLOAD IMAGE</span>
                                            <input type="file" name="image" id="" />
                                        </div>
                                        <div className="items">
                                            <tr>
                                                <label htmlFor="aadharno">AADHAR NO.</label>
                                                <input type="text" name="aadharno" placeholder='xxxx-xxxx-xxxx' />
                                            </tr>
                                            <tr>
                                                <label htmlFor="fullname">
                                                    FULL NAME
                                                </label>
                                                <input type="text" name="fullname" placeholder='Full Name' />
                                            </tr>
                                            <tr>
                                                <label htmlFor="age">
                                                    AGE
                                                </label>
                                                <input type="text" name="age" placeholder='AGE' />
                                            </tr>
                                        </div>
                                        <div className="items">
                                            <tr>
                                                <label htmlFor="gender">GENDER</label>
                                                <input type="radio" name="gender" value={"Male"} />
                                                <span>Male</span>
                                                <input type="radio" name="gender" value={"Female"} />
                                                <span>Female</span>
                                            </tr>
                                            <tr>
                                                <label htmlFor="contact">
                                                    CONTACT
                                                </label>
                                                <input type="text" name='contact' placeholder='xxxxxxxxxx' />
                                            </tr>
                                        </div>
                                        <div className="items">
                                            <tr>
                                                <label htmlFor="address">
                                                    <input type="text" name='address' placeholder='Address' />
                                                </label>
                                            </tr>
                                        </div>
                                    </div>
                                    <div className="card-items"></div>
                                    <div className="card-items"></div>
                                    <div className="card-items"></div>
                                    <div className="card-items"></div>
                                    <div className="card-items"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mreport;
