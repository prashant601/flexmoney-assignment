import {React} from "react"
const EditSlot = ({user}) => {
    return <>
        <div className="container my-5 ">
      <form >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required="true"
            type="email"
            
            
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
          
          
          id="name"
        />
        <label className="form-label mb-3">Enter your age</label>
        <input
          min="18"
          max="65"
          required="true"
          type="number"
          className="form-control"
          
          id="age"
        />
        <label className="form-label mb-3">Enter your Mobile number</label>
        <input
          required="true"
          type="text"
          className="form-control mb-3"
          id="phone"
          
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
          <ul class="dropdown-menu">
            {/* <li className="dropdown-item" onClick={() => setSlot(1)}>
              Slot 1: 6A.M.-7A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(2)}>
              Slot 2: 7A.M.-8A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(3)}>
              Slot 3: 8A.M.-9A.M.
            </li>
            <li className="dropdown-item" onClick={() => setSlot(4)}> */}
              {/* Slot 4: 5P.M.-6P.M. */}
            {/* </li> */}
          </ul>
        </div>
        <div>
          
        <button className="btn btn-info">{}</button>
        </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
}
export default EditSlot;