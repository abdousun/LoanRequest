import React, { useState } from 'react';
import './Form.css';
import Accept from './Accept'; 
import Refuse from './Refuse';

function Form() {
  const [form, setForm] = useState({
    name: '',
    Phone: '',
    age: '',
    isemploye: false,
    salaire: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPhoneIncorrect, setIsPhoneIncorrect] = useState(false);
  const [isAgeIncorrect, setIsAgeIncorrect] = useState(false);



 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name && form.Phone && form.age && form.isemploye && form.salaire) {
      if (form.Phone.length < 12) {
        setIsPhoneIncorrect(true);
        setIsSubmitted(false);
      } else {
        setIsPhoneIncorrect(false);
        setIsSubmitted(true);
      }
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'absolute', 
      background: 'rgba(0, 0, 0, 0.5)', // Opacité de 50%
      width: '100vw', 
      height: '100vh'
    }}>
      <div className='box'>
        <form className='form' onSubmit={handleSubmit}>
          <h1 className='title'>Requesting a Loan</h1>
          <div className="form-row" style={{ marginBottom: '15px', width: '100%' }}>
            <div>
              <label htmlFor="validationServer01" style={{ color: 'white' }}>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                  setIsSubmitted(false); // Reset submit status if form changes
                }}
              />
            </div>
            <div>
              <label htmlFor="validationServer02" style={{ color: 'white' }}>Phone number</label>
              <input
                maxLength={12}
                type="text"
                className="form-control"
                name="phone"
                value={form.Phone}
                onChange={(event) => {
                  setForm({ ...form, Phone: event.target.value });
                  setIsSubmitted(false); 
                }}
              />
            </div>
            <div>
              <label htmlFor="validationServer03" style={{ color: 'white' }}>Age</label>
              <input
                type="text"
                className="form-control"
                name="age"
                value={form.age}
                onChange={(event) => {
                  setForm({ ...form, age: event.target.value });
                  setIsSubmitted(false); 
                }}
              />
            </div>
          </div>
          <div className="form-group" style={{ width: '100%' }}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="isEmploye"
                checked={form.isemploye}
                onChange={(event) => {
                  setForm({ ...form, isemploye: event.target.checked });
                  setIsSubmitted(false); 
                }}
              />
              <label htmlFor="" className="form-check-label" style={{ color: 'white' }} >
                Are you an employee
              </label>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="employeeStatus" style={{ color: 'white' }}>Salary</label>
            <select
              className="form-control"
              id="employeeStatus"
              name="salaire"
              value={form.salaire}
              onChange={(event) => {
                setForm({ ...form, salaire: event.target.value });
                setIsSubmitted(false); 
              }}
            >
              <option>choose your Salary</option>
              <option>Less than $2000</option>
              <option>$2000</option>
              <option>More than $2000</option>
            </select>
          </div>
          <div className='btn'>
            <button className="btn btn-primary" type="submit" style={{ width: '50%' }} disabled={!form.name || !form.Phone || !form.age || !form.isemploye || !form.salaire}>
              Submit
            </button>
          </div>
        </form>
      </div>
      {isSubmitted && <Accept />} 
      {isPhoneIncorrect && <Refuse />}
    </div>
  );
}

export default Form;
