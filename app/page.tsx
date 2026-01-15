import { Fade } from "react-awesome-reveal";
import { white_btn } from "./components/reusable_css";
import Image from "next/image"
import { BgImg } from "./components/bg_img";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main>
        <div style={{...BgImg("https://cdn.clipond.com/pet/101220.jpg"),backgroundAttachment:"fixed"}} className="vh-100 primary d-flex align-items-center justify-content-center">
          <div className=" container d-flex align-items-center justify-content-center">
            
            <div className="text-center bg_op rounded p-5 ">
              <Fade cascade={true}>
                <h1 className="display-1 text-white  fw-bold">Pristine Eco Tours</h1>
                <h3 className="text-white">Grow with Nature. Discover Sustainability.</h3>
                <p className="text-white">
                Discover the Beauty of Regenerative Living
                </p>
                <Link href="/book"><button className={`${white_btn}`}>Book Your Trip</button></Link>
                </Fade>
            </div>
          
          </div>

        </div>
        <div className="min-vh-100  d-flex align-items-center justify-content-center text-center">
          <Fade cascade={true} >
          <div className="container pt-5 pb-5">
            <h1 className="display-1 fw-bold tp">Live<span className="ts"> &</span> Learn</h1>
            <p>We make every trip a new experience you wont forget</p>
            <div className="row gap-3 justify-content-center">
              <div className="col-sm">
                  

                  <Image src="https://cdn.clipond.com/Travel%20Den/4.png" width={"300"} height={"300"} alt="zanibar"/>
                  <p><span className="fw-bold ts">Eco-Tours</span> Enjoy guided walking tours of our organic farm and learn

</p>
              </div>
              <div className="col-sm">
              <Image src="https://cdn.clipond.com/pet/3.png" width={"300"} height={"300"} alt="zanibar"/>
              <p><span className="fw-bold ts">Hands-On Workshops</span> Perfect for schools, organizations, or curious individuals, our workshops dive deep into topics</p>
              </div>
              <div className="col-sm">
 <Image src="https://cdn.clipond.com/pet/5.png" width={"300"} height={"300"} alt="zanibar"/>
                  <p><span className="fw-bold ts">Farm Stays</span> Stay in our eco-friendly accommodations and get involved in daily farm life</p>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-row flex-wrap gap-1">
              <Link href="/tours"><button className="btn rounded-pill p-btn">View Available Tours</button> </Link>

              
              <Link href="/book"><button className="btn rounded-pill p-btn">Book An Educational Tour</button></Link>

            </div>
            </div>
            </Fade>
        </div>
        <div className="min-vh-100 secondary d-flex align-items-center justify-content-center" style={{backgroundAttachment:"fixed"}}>
          <div className="row container d-flex align-items-center">

            <div className="col-sm text-md-start text-center order-md-2 pt-5">
              <Fade cascade={true}>
                <h1 className="display-1 text-white fw-bold">About<br/><span className="tp">Pristine Eco Tours</span></h1>
                <p className="text-white">At Pristine Eco Tours, we believe in the power of nature to heal, nourish, and inspire. Founded on the principles of regenerative agriculture, we are more than just a destination, we&apos;re a movement toward a sustainable and abundant future.
<br/>
Our farm is a living classroom, offering hands-on experiences that teach visitors how nature-based solutions can reshape the way we grow food, care for animals, and live in harmony with our environment.
                </p>
                <Link href="/book"><button className={`${white_btn}`}>Book Your Trip</button></Link>
                </Fade>
            </div>
            <div className="col-sm order-md-1">
              <Fade>
                <Image src="https://cdn.clipond.com/pet/abt.png" className="img-fluid" width="700" height="500" alt="Picture of Zanzibar"/>
              </Fade>
            </div>
          </div>

        </div>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://cdn.clipond.com/pet/2149894686.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded bg_op">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Regenerative Agriculture
            </h1>
            <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about regenerative agriculture"> <button className={white_btn}>Learn More</button></Link>
          </Fade>
          </div>

        </div>
        <Fade  cascade={true}>
        <div className="container p-5 text-center">
            <h1 className="display-1 fw-bold text-black"><span className="tp">Our Mission</span> <span className="ts"> & Mission</span></h1>
            <p>To inspire eco-conscious living through education, immersive experiences, and regenerative practices that restore both land and lives.</p>
            <h4><span className="tp">Core </span><span className="ts">Values</span></h4>
            <div className="row gap-5">
            <div className="col-sm secondary rounded text-white p-1" >
                    <h5>Education</h5>
                    <p>We believe learning is key to change.</p>
                </div>
                <div className="col-sm primary rounded text-white p-1" >
                    <h5>Sustainability</h5>
                    <p>Every practice on our farm is designed with the planet in mind.</p>
                </div>
                <div className="col-sm primary rounded text-white p-1" >
                    <h5>Innovation</h5>
                    <p>We champion solutions that benefit both people and the planet.</p>
                </div>
                <div className="col-sm secondary primary rounded text-white p-1" >
                    <h5>Community</h5>
                    <p>Together, we grow stronger.</p>
                </div>
                
            </div>
        </div>
        </Fade>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://cdn.clipond.com/pet/2149607104.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded bg_op">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Workshops
            </h1>
            <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about your workshops!"><button className={white_btn}>Learn More</button></Link>
          </Fade>
          </div>

        </div>
        <div className="min-vh-100 primary text-white d-flex align-items-center justify-content-center">
         
          <div className="pt-5 pb-5">
          <Fade cascade={true} >
            <div className="container text-center ">
              <h1 className="display-1 fw-bold">Our <span className="span">Experiences</span></h1>
              <h5>Explore • Learn • Regenerate</h5>
              <p>Step into a world where sustainability comes to life. At Pristine Eco Tours, we offer a variety of activities that bring you closer to nature and deepen your understanding of eco-living.</p>
            </div>
            <div className=" m-5">
            <div className="row gap-5">
              <div className="col-sm bg-white  rounded p-0 team_card container">
                  
                  <div className="p-2">
                  <h3 className="tp">Hands-On Workshops</h3>
                  <ul className="ts">
                    <li>Water conservation and harvesting</li>
                    <li>DIY compost and organic fertilizers</li>
                    <li>Regenerative livestock management</li>
                    <li>Agroforestry and carbon farming</li>
                  </ul>
                  </div>

              </div>
            
              <div className="col-sm bg-white border team_card rounded p-0">
                 
                  <div className="p-2">
                  <h3 className="tp">Eco-Tours</h3>
                  <ul className="ts">
                    <li>Permaculture principles</li>
                    <li>Composting and soil health</li>
                    <li>Natural pest control and companion planting</li>
                    <li>Biodiversity and ecosystem restoration</li>
                  </ul>
                  </div>

              </div>
             
           
            </div>
            </div>
            </Fade>
            </div>
        </div>
        <div className="text-center secondary vh-100 d-flex flex-column align-items-center justify-content-center" style={{...BgImg("https://cdn.clipond.com/pet/4266.jpg"), backgroundAttachment:"fixed"}}>
          <div className="p-5 rounded bg_op">
          <Fade cascade={true}>
            <h1 className="display-1 ts fw-bold text-white">
              Eco-Tours
            </h1>
           <Link target="_blank" href="https://wa.me/263776743323?text=Hi, can i get more information about your Eco Tours "><button className={white_btn}>Learn More</button></Link> 
          </Fade>
          </div>

        </div>
      </main>
    </div>
  );
}
