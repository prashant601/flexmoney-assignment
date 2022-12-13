import {React} from "react"
const Home = () => {
     return (
        <div style={{ backgroundImage:`url(https://images.pexels.com/photos/8436738/pexels-photo-8436738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,backgroundSize:"cover",height:"100vh",width:"100vw",opacity: 0.8 }}>
          {/* Hello World */}
          <div className="container container1 py-4">
          <b><center><h1><i>Welcome to Prashant's Yoga Classes!!</i></h1></center>
          <h2 className="my-4">Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering. There is a wide variety of schools of yoga, practices, and goals in Hinduism, Buddhism, and Jainism, and traditional and modern yoga is practiced worldwide.</h2>
          <h3> Come Learn Yoga with us now just for rupees 500!!!</h3>
        </b>
        </div>
        </div>
      );
}
export default Home