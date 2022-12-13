import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState();
  const [ids, setIds] = useState();
  const [slot, setSlot] = useState(data.currSlotId);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/customer/");
      res
        .json()
        .then((res) => setData(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  }, []);
  localStorage.setItem("data", data);
  console.log(data);

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


  function submitForm(event){
    event.preventDefault();
    console.log(date)
    let dy = date.substring(0, 8) + "01";
    dy = Date.parse(dy);
    let dt = Date.parse(new Date().toISOString());
    if (dy <= dt) alert("Please enter the date for next month");
    else {
      // console.log(dy)
    }
    alert("Slot for upcoming Date is updated")
    let jsonData = { id: ids, date: date, slotToSet: slot };
    console.log(jsonData);
    fetch("http://localhost:5000/customer/setSlot", {
      // Enter your IP address here
      mode: "cors",
      method: "PUT",
      body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Slot for upcoming Date is updated")
        navigate("/");
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      {data.map((items) => {
        return (
          <>
            <div className="container my-3">
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-blue order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Name: {items.customerName}</h6>
                      <h2 className="text-right">
                        <span>{getSlotInfo(items.currSlotId)}</span>
                      </h2>
                      <p className="m-b-0">
                        Mobile : {items.phoneNumber}
                        <span className="f-right">Age: {items.age}</span>
                      </p>
                      <form onSubmit={submitForm}>
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
                            <li
                              className="dropdown-item"
                              onClick={() => setSlot(1)}
                            >
                              Slot 1: 6A.M.-7A.M.
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={() => setSlot(2)}
                            >
                              Slot 2: 7A.M.-8A.M.
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={() => setSlot(3)}
                            >
                              Slot 3: 8A.M.-9A.M.
                            </li>
                            <li
                              className="dropdown-item"
                              onClick={() => setSlot(4)}
                            >
                              Slot 4: 5P.M.-6P.M.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button className="btn btn-info">
                            {getSlotInfo(items.currSlotId)}
                          </button>
                        </div>
                      </div>
                      <div>
                      <input
                        type="date"
                        name="dateSlot"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    <button className="mx-3" type="submit"  onClick={() => setIds(items._id)}>
                      Edit
                    </button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Users;
