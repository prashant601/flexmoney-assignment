import {React} from "react"
const About = () => {
    return <>
    <div className="container my-3">
        <h1>
            Features:
        </h1> 
        <ul>
            <li>Subscribe for Yoga Classes.</li>
            <li>Make a payment of just <b>500/- Rs INR.</b> for the entire month.</li>
            <li>The site has the feature of validation for the user's that submit form.
                <ul>
                    <li> Email address should be valid</li>
                    <li> Full name field should be valid.</li>
                    <li> Age should be between <b>18</b> and <b>65</b>.</li>
                    <li> Mobile number should be of <b>10</b> digits.</li>
                </ul>
            </li>
            <li> Feature to edit the slot for the next month.</li>
            <li> Feature to show list of users with membership.</li>
        </ul>

        <h1>
            Instructions:
        </h1>
        <ul>
            <li> Validate the form with all the valid data as mentioned in the feature.</li>
            <li> Edit or Update slot can be done only for the next month or the months after that.</li>
        </ul>
        {/* <h4>
            Features:
            500 rupees
            subsribe yoga meme
            payment 
            validation
            edit (next month)
            list of users with membership
        </h4> */}
        {/* Instructions
        validation
        edit / update */}
        
    </div>
    </>
};
export default About;