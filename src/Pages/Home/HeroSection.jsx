export default function HeroSection() {
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'am Arjie</p>
                    <h1 className="hero--section--tile">
                        <span className="hero--section-title-color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut alias reiciendis pariatur nemo rerum, 
                        libero laudantium excepturi? Voluptas culpa doloribus eaque sequi eveniet numquam vero possimus accusamus non alias.
                        <br /> Quod ut alias reiciendis pariatur nemo rerum, libero laudantium excepturi? 
                    </p>
                </div>
                <button className="btn btn-primary"> Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero" />
            </div>
        </section>
    );
}