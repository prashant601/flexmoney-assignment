import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [slot, setSlot] = useState(1);
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const navigate=useNavigate();

  function submitForm(event) {
    event.preventDefault();
    let jsonData = {"customerName":name,"phoneNumber":phone,"age":age,"slotId":slot}
    console.log(name, age, email, phone);
    fetch('http://localhost:5000/customer/create', {  // Enter your IP address here
    mode: 'cors', 
    method: 'POST',
    body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
      navigate("/");
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     });


  }
  function getSlotInfo(id){
    if(id===1)
    return "6AM to 7AM";
    if(id===2)
    return "7AM to 8AM";
    if(id===3)
    return "8AM to 9AM"
    if(id===4)
    return "5PM to 6PM"
  }  
  return (
    <div className="container my-5 ">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required="true"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <label for="name" className="form-label mb-3">
          Full Name{" "}
        </label>
        <input
          required="true"
          type="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <label className="form-label mb-3">Enter your age</label>
        <input
          min="18"
          max="65"
          required="true"
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          id="age"
        />
        <label className="form-label mb-3">Enter your Mobile number</label>
        <input
          required="true"
          type="text"
          className="form-control mb-3"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="country_code"
          title="Please enter valid mobile number of 10 digits"
          pattern="[1-9]{1}[0-9]{9}"
        />
        <div className="mb-3"></div>
        <div className="dropdown my-3 d-flex justify-content-between">
          <div>
          <button
            required="true"
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Slot
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => setSlot(1)}>
              Slot 1: 6A.M.-7A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(2)}>
              Slot 2: 7A.M.-8A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(3)}>
              Slot 3: 8A.M.-9A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(4)}>
              Slot 4: 5P.M.-6P.M.
            </li>
          </ul>
        </div>
        <div>
          
        <button className="btn btn-info">{getSlotInfo(slot)}</button>
        </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
};
export default Form;
