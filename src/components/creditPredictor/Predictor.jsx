import React, { useState } from 'react';
import "./predictor.scss";

function Predictor() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employed, setEmployed] = useState(false);
    const [married, setMarried] = useState(true);
    const [dependants, setDependants] = useState(0);
    const [salary, setSalary] = useState(0);
    const [creditAmount, setCreditAmount] = useState(0);

    const calculator = () => {
        let calculatedCreditAmount = 0;
        if (!married && dependants === 0 && employed) {
            calculatedCreditAmount = salary * 3 / 4;
        } else if (employed && married && dependants <= 2) {
            calculatedCreditAmount = salary * 1 / 2;
        } else if (employed && married && dependants > 2) {
            calculatedCreditAmount = salary * 2 / 5;
        } else if(employed && !married && dependants > 2){
            calculatedCreditAmount = salary*3/5

        }else if(employed && !married && dependants <= 2){
            calculatedCreditAmount = salary*4/5

        }
        else {
            calculatedCreditAmount = 0;
        }
        setCreditAmount(calculatedCreditAmount);
    };

    return (
        <div className='predictor'>
           <div className="wrapper">
           <div className="title">
                <h2>Bank Credit Predictor</h2>
            </div>

            {creditAmount > 0 ? <h5 className='top'>{`Dear ${lastName}`} credit limit mount is: {`ksh ${creditAmount} per month`}</h5> : <h1 className='top'>Kindly fill the form below</h1>}
            {/* {creditAmount === 0 ? <h1>You need to provide more infomation</h1>:""} */}

            <div className="form">
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="name"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        id='lastName'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    
                    <div className="select">
                    <label htmlFor="employmentStatus">Employed</label>
                    <select name="employment" id="employment" value={employed} onChange={(e) => setEmployed(e.target.value === "true")}>
                        <option value={false} className='option'>No</option>
                        <option value={true} className='option'>Yes</option>
                    </select>

                    <label htmlFor="marriend">Married</label>
                    <select name="maried" id="married" value={married} onChange={(e) => setMarried(e.target.value === "true")}>
                        <option value={false} className='option'>No</option>
                        <option value={true} className='option'>Yes</option>
                    </select>
                    </div>
                    {!employed ? <p className='employed'>You have to be employed to use this system</p>:""}
                    <label htmlFor="numberOfDependants">Number of Dependents</label>
                    <input
                        type="number"
                        name="numberOfDependants"
                        id="numberOfDependants"
                        placeholder='Number of Dependents'
                        value={dependants}
                        onChange={(e) => setDependants(e.target.value)}
                    />

                    <label htmlFor="monthlySalary">Monthly Salary</label>
                    <input
                        type="number"
                        name="monthlySalary"
                        id="monthlySalary"
                        placeholder='Monthly Salary'
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />

                    <button type="button" onClick={calculator}>Calculate</button>
                    <p className='disclaimer'>Disclaimer!! For our system to process your infomation, you have to be employed. If youre not employed, you have to prresent evidence physically so that we can gauge your loan limit</p>
                </form>
            </div>
           </div>
        </div>
    );
}

export default Predictor;
