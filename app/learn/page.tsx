import Link from "next/link";

export default function PristineEcoTours() {
    return (
      <div className="container-fluid p-0">
        {/* Hero Section */}
        <div className="primary bg-opacity-75 text-white text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">🌱 Learn with Pristine Eco Tours</h1>
            <p className="lead fw-bold">Discover. Experience. Grow.</p>
            <hr className="my-4 bg-white" />
            <p className="">
              At <strong>Pristine Eco Tours</strong>, learning isn&apos;t confined to a classroom it thrives in fields, gardens, animal barns, and the buzzing hum of beehives. Nestled in the serene landscapes of Zimbabwe, our farm is a <em>living classroom</em>, where every visitor can witness nature, sustainability, and innovation working in perfect harmony.
            </p>
            <p className=" mb-0">
              We are proud to be a regenerative agriculture and eco-tourism venture, shaping the future of farming through education, hands-on experiences, and community empowerment.
            </p>
          </div>
        </div>
  
        {/* What You&apos;ll Learn Section */}
        <div className="container my-5">
          <h2 className="text-center mb-5">🌍 What You&apos;ll Learn</h2>
          
          <div className="row g-4">
            {/* Regenerative Agriculture */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">♻️</span>
                  </div>
                  <h3 className="card-title text-center">🔁 Regenerative Agriculture in Action</h3>
                  <p className="card-text">
                    Explore how we grow food <em>with nature not against it</em>. On our 8-hectare plot, we practice sustainable techniques like crop rotation, cover cropping, and permaculture principles to enrich soil health and boost biodiversity. Learn how our fields produce crops like maize, quinoa, tomatoes, and legumes without depleting the land.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Seedling to Sustainability */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">🌱</span>
                  </div>
                  <h3 className="card-title text-center">🌿 Seedling to Sustainability</h3>
                  <p className="card-text">
                    Step into our <strong>nursery and greenhouse</strong>, where we partner with Europe Africa Seed Initiative (EASI Seeds) to raise high-quality vegetable seedlings. Discover how sustainable seed production supports food security and climate-resilient farming.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ethical Animal Husbandry */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">🐄</span>
                  </div>
                  <h3 className="card-title text-center">🐄 Ethical Animal Husbandry</h3>
                  <p className="card-text">
                    Meet our cows, goats, Roadrunner chickens, rabbits, hamsters, and sheep each raised in humane, eco-friendly systems. From free-range grazing and natural feed supplements to rotational pasture management, our animal operations model ethical livestock care and integrated farming.
                  </p>
                </div>
              </div>
            </div>
            
            {/* The Buzz on Bees */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">🐝</span>
                  </div>
                  <h3 className="card-title text-center">🍯 The Buzz on Bees</h3>
                  <p className="card-text">
                    Get up close with our <strong>beekeeping units</strong>, where hives nestled near permaculture gardens not only produce sustainable honey, but also boost pollination and ecosystem health. Learn why bees are vital to our food systems and how to protect them.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Aquaponics & Fish Farming */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">🐟</span>
                  </div>
                  <h3 className="card-title text-center">🐟 Aquaponics & Fish Farming</h3>
                  <p className="card-text">
                    Visit our <strong>integrated fishponds</strong> and discover how aquaponics supports both fish production and vegetable growth. It&apos;s a closed-loop system that turns waste into wealth feeding both the garden and the mind.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Composting & Vermiculture */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <span className="display-6 text-success">🌱</span>
                  </div>
                  <h3 className="card-title text-center">♻️ Composting & Vermiculture</h3>
                  <p className="card-text">
                    Dig deep into soil health by learning how we turn organic waste into nutrient-rich compost and <strong>vermicast</strong> using earthworms. These systems are the heart of our fertility cycle and one of the simplest ways you can support sustainability at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* A Farm that Teaches */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="text-center mb-3">
                  <span className="display-6 text-success">👩🏽‍🏫</span>
                </div>
                <h2 className="text-center mb-4">👩🏽‍🏫 A Farm that Teaches</h2>
                <p className="fs-5">
                  Whether you&apos;re a student, a teacher, a researcher, or simply a curious soul, our <strong>educational programs</strong> are designed to inspire and empower. Here&apos;s what we offer:
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-light"><strong>Farm Tours & Day Visits</strong>: Explore every corner of our eco-farm with guided tours led by experienced educators.</li>
                  <li className="list-group-item bg-light"><strong>Workshops & Retreats</strong>: Take part in hands-on sessions in organic agriculture, composting, permaculture, and agroecology.</li>
                  <li className="list-group-item bg-light"><strong>Internship Programs</strong>: Dive deeper into regenerative agriculture with practical experience for students and aspiring eco-preneurs.</li>
                  <li className="list-group-item bg-light"><strong>School Trips & Group Bookings</strong>: Perfect for schools and organizations looking for educational outings that blend fun and purpose.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="card border-success">
                  <div className="card-body">
                    <div className="text-center mb-3">
                      <span className="display-6 text-success">🛖</span>
                    </div>
                    <h3 className="card-title text-center">🛖 Stay & Learn</h3>
                    <p className="card-text">
                      Our eco-tourism experience includes <strong>eco-friendly accommodations</strong>, where guests can rest, reflect, and reconnect with nature. Whether you&apos;re escaping for the weekend or planning an educational retreat, every visit directly supports sustainable practices and local community development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Our Philosophy */}
        <div className="container my-5">
          <div className="text-center mb-3">
            <span className="display-6 text-success">🌍</span>
          </div>
          <h2 className="text-center mb-4">📚 Our Philosophy</h2>
          <p className="text-center mb-4 fs-5">At the core of Pristine Eco Tours is a deep belief in:</p>
          
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card h-100 text-center border-success shadow-sm">
                    <div className="card-body">
                      <h4 className="card-title">Sustainability</h4>
                      <p className="card-text">Farming that restores, not depletes.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 text-center border-success shadow-sm">
                    <div className="card-body">
                      <h4 className="card-title">Innovation</h4>
                      <p className="card-text">Embracing creative, practical solutions.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 text-center border-success shadow-sm">
                    <div className="card-body">
                      <h4 className="card-title">Community</h4>
                      <p className="card-text">Growing together, locally and globally.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 text-center border-success shadow-sm">
                    <div className="card-body">
                      <h4 className="card-title">Education</h4>
                      <p className="card-text">Knowledge shared is knowledge multiplied.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="secondary bg-opacity-75 text-white text-center py-5">
          <div className="container">
            <h2 className="mb-4">🌿 Join the Movement</h2>
            <p className="fs-5 mb-4">
              We&apos;re not just a destination, we&apos;re a movement. A place where sustainability is lived, learned, and shared. Come learn with us, grow with us, and be part of a future where people and planet thrive together.
            </p>
            <Link href="/book"><button className="btn rounded-pill btn-outline-light">Book Your Visit Today</button></Link>
          </div>
        </div>
        </div>
    )}
