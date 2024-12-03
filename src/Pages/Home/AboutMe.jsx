export default function AboutMe(){
    return(
        <section id= "AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        About
                    </p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section--description"> I'am a Web Developer</p>
                         <p className="hero--section--description"> Equipped skills using</p>
                         <div className="about-section">
                            <p className="section--title">Frontend</p>
                            <ul>
                                <li>REACT JS</li>
                                <li>Bootstrap</li>                                
                                <li>Tailwind CSS</li>
                                <li>Node JS</li>
                                <li>Javascript</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                            </ul>
                            <p className="section--title">Backend</p>
                            <ul>
                                <li>REST API</li>
                                <li>Firebase</li>                                
                                <li>Git</li>
                                <li>MySql</li>
                                <li>PHP</li>
                                <li>Java</li>
                                <li>Python</li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    )
}