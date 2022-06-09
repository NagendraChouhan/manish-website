import { useState } from 'react';
import './App.css';
import tabular from './tabChange';

function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    businessName: '',
    gstNumber: '',
    address: '',
    loanAmount: 0,
    interestRate: 0,
    loanTenure: 0
  });

  // const serverHost = 'https://loan-application2.herokuapp.com';
  // const alert = document.querySelector('.alert');

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(
  //     // `https://loan-application2.herokuapp.com/send`,
  //     `${serverHost}/send`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         age: formData.age,
  //         businessName: formData.businessName,
  //         gstNumber: formData.gstNumber,
  //         address: formData.address,
  //         loanAmount: formData.loanAmount,
  //         interestRate: formData.interestRate,
  //         loanTenure: formData.loanTenure,
  //       })
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.success === true) {
  //     alert.classList.add('d-flex');
  //     alert.classList.remove('d-none');

  //     setTimeout(() => {
  //       alert.classList.add('d-none');
  //       alert.classList.remove('d-flex');
  //     }, 1500);
  //   }
  //   setFormData({
  //     firstName: '',
  //     lastName: '',
  //     age: 0,
  //     businessName: '',
  //     gstNumber: '',
  //     address: '',
  //     loanAmount: 0,
  //     interestRate: 0,
  //     loanTenure: 0
  //   });
  // }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="alert alert-success d-none align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
        <div>
          Loan application submitted
        </div>
      </div>
      <div className='container pt-5 mt-5'>
        <article className="about shadow pb-5">
          <div className="btn-container">
            <button className="tab-btn active" data-id="personal-detail" onClick={() => tabular()}>Personal Details</button>
            <button className="tab-btn" data-id="business-detail" onClick={() => tabular()}>Business Details</button>
            <button className="tab-btn" data-id="loan-detail" onClick={() => tabular()}>Loan Application Details</button>
          </div>
          <form className="about-content text-center" method='post' action='http://localhost:5000/'>
            <div className="content active" id="personal-detail">
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text fas fa-user" id="basic-addon1"></span>
                <input type="text" className="form-control" placeholder="First Name" name='firstName' value={formData.firstName} onChange={onChange} required />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text fas fa-user" id="basic-addon1"></span>
                <input type="text" className="form-control" placeholder="Last Name" name='lastName' value={formData.lastName} onChange={onChange} />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">age</span>
                <input type="number" className="form-control" placeholder="Enter Age" name='age' value={formData.age} onChange={onChange} required />
              </div>
            </div>
            <div className="content" id="business-detail">
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">Business</span>
                <input type="text" className="form-control" placeholder="" name='businessName' value={formData.businessName} onChange={onChange} required />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">GST No.</span>
                <input type="text" className="form-control" placeholder="" name='gstNumber' value={formData.gstNumber} onChange={onChange} required />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <textarea type="text" rows='3' className="form-control" placeholder="" name='address' value={formData.address} onChange={onChange} required></textarea>
              </div>
            </div>
            <div className="content" id="loan-detail">
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">Loan Amount</span>
                <input type="number" className="form-control" placeholder="Loan Amount" name='loanAmount' value={formData.loanAmount} onChange={onChange} required />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">Interest Rate</span>
                <input type="number" className="form-control" placeholder="Interest Rate" name='interestRate' value={formData.interestRate} onChange={onChange} required />
              </div>
              <div className="input-group w-50 mb-3 m-auto">
                <span className="input-group-text" id="basic-addon1">Loan Tenure</span>
                <input type="number" className="form-control" placeholder="Loan Tenure" name='loanTenure' value={formData.loanTenure} onChange={onChange} required />
              </div>
              <button type="submit" className='btn btn-secondary btn-lg mt-2'>submit</button>
            </div>
          </form>
        </article>
      </div>
    </>
  );
}

export default App;