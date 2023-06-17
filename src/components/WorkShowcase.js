export default function WorkShowcase() {
    return (
        <section id="work">
            <h3>Work</h3>
            <section id="mainApplication">
                <img src={process.env.PUBLIC_URL + '/surf.png'} alt="surf" width="500" height="300" />
                <a href="#surfReport">Surf Report - MERN STACK</a>
            </section>
            <div></div>
            <section id="additionalApplications">
                <a href="#ledWall"><img src={process.env.PUBLIC_URL + '/surf.png'} alt="surf" width="500" height="300" />LED Wall - Node/IoT</a>
                <a href="#calculator"><img src={process.env.PUBLIC_URL + '/surf.png'} alt="surf" width="500" height="300" />Calculator - React/Javascript/Css</a>
                <a href="#pestelPuzzels"><img src={process.env.PUBLIC_URL + '/surf.png'} alt="surf" width="500" height="300" />Pestel Puzzels - MERN Stack</a>
                <a href="#runBuddy"><img src={process.env.PUBLIC_URL + '/surf.png'} alt="surf" width="500" height="300" />Run Buddy - HTML/CSS</a>
            </section>
        </section>
    )
}