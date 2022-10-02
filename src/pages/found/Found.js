import React from 'react'
import { Sidemenu } from '../../components/menu/Sidemenu';

const FOUND = () => {
    return (
        <>
            <div className="container">
                <Sidemenu id={3} />
                <div className="right-cont">
                    <div className="nav">
                        <h1>Found Report</h1>
                    </div>
                    <hr />
                    <div className="mainSection">
                        <div className="row">
                            <div className="cards" style={{ width: "100%", height: "auto" }}>
                                <form>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Found Person Report</h3>
                                        </div>
                                        <div className="items" style={{ color: "#999", marginTop: "20px", paddingLeft: "50px" }}>
                                            <tr >
                                                <span>UPLOAD IMAGE</span>
                                                <input type="file" name="image" id="" style={{ margin: "0px 10px" }} />
                                            </tr>
                                        </div>
                                        <div className="items">

                                            <li>
                                                <label htmlFor="fullname">
                                                    REPORTER NAME
                                                </label>
                                                <input type="text" name="fullname" placeholder='Full Name' />
                                            </li>
                                            <li>
                                                <label htmlFor="contact">
                                                    CONTACT
                                                </label>
                                                <input type="text" name='contact' placeholder='xxxxxxxxxx' />
                                            </li>
                                        </div>
                                        {/* <div className="items">
                                            <li style={{ display: "unset", textAlign: "left", width: "92%" }}>
                                                <label htmlFor="address">ADDRESS</label>
                                                <input type="text" name='address' placeholder='Address' />
                                            </li>
                                        </div> */}
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Physical Appearance</h3>
                                        </div>
                                        <div className="items">
                                            <li>
                                                <label htmlFor="gender">GENDER</label>
                                                <div style={{ marginTop: "4px" }}>
                                                    <input type="radio" name="gender" value={"Male"} />
                                                    <span style={{ marginRight: "50px" }}>Male</span>
                                                    <input type="radio" name="gender" value={"Female"} />
                                                    <span>Female</span>
                                                </div>
                                            </li>
                                            <li>
                                                <label htmlFor="fullname">
                                                    MISSING PERSON NAME
                                                </label>
                                                <input type="text" name="fullname" placeholder='Full Name' />
                                            </li>
                                            <li>
                                                <label htmlFor="color">COLOR OF CLOTHES</label>
                                                <input type="text" name="color" placeholder='Color' />
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Height Characterstics</h3>
                                        </div>
                                        <div className="items">
                                            <li style={{ marginLeft: "40px" }}>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='heightCharacterstic' />
                                                    <span>SLIM</span>
                                                </label>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='heightCharacterstic' />
                                                    <span>GENETIC</span>
                                                </label>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Body Characterstics</h3>
                                        </div>
                                        <div className="items">
                                            <li style={{ marginLeft: "40px" }}>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='bodyCharacterstic' />
                                                    <span>SLIM</span>
                                                </label>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='bodyCharacterstic' />
                                                    <span>FIT</span>
                                                </label>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>Complexion</h3>
                                        </div>
                                        <div className="items">
                                            <li style={{ marginLeft: "40px" }}>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='bodyCharacterstic' />
                                                    <span>PALE</span>
                                                </label>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='bodyCharacterstic' />
                                                    <span>FAIR</span>
                                                </label>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <h3>HAIR Characterstics</h3>
                                        </div>
                                        <div className="items">
                                            <li style={{ marginLeft: "40px" }}>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='HAIRCharacterstic' />
                                                    <span>BLACK</span>
                                                </label>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='HAIRCharacterstic' />
                                                    <span>SMOOTH</span>
                                                </label>
                                                <label class="label-checkbox">
                                                    <input type="checkbox" name='HAIRCharacterstic' />
                                                    <span>LONG</span>
                                                </label>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="card-items">
                                        <div className="items">
                                            <button type="submit" className="custom-btn btn-16">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FOUND;
