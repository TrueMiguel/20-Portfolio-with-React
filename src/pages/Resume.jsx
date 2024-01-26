// resume page  

export default function Resume() {
    return (
        <div className="pt-3">
            <div className="d-flex justify-content-evenly pb-4">

            <h1 className="d-flex align-items-center">Resume</h1>

            </div>

            <div className="ps-5">

                <h2 className="py-2">Objective</h2>

                <hr className="border-3 line opacity-100"/>

                <p>Eager to leverage a 12-year career in customer service and training at Envision Physician Services and recent intensive training in full stack web development to transition into a role as a Full Stack Developer/Computer Software Engineer. Brings a unique perspective on user experience and a strong foundation in MERN stack, React, SQL/NoSQL, and more.</p>

                <h2 className="py-2">Education</h2>

                <hr className="border-3 line opacity-100"/>

                <p>Full Stack Web Development Course
                    University of North Carolina Charlotte Coding Bootcamp
                    Date of Completion: 1/16/2024 </p>

                <ul>
                    <li>Key Skills: MERN Stack, React, Progressive Web Applications (PWA), SQL and NoSQL databases, JavaScript, Express.js, Object-Oriented Programming (OOP), Node.js, APIs, HTML5.</li>
                    
                    <li>Completed several hands-on projects, demonstrating proficiency in building and deploying full-stack web applications.</li>
                </ul>
                    
                <h2 className="py-2">Professional Experience</h2>

                <hr className="border-3 line opacity-100"/>

                <h3 className="py-2">Envision Physician Services</h3>

                <p className="py-1"> <b>Training Team Member </b></p>
                
                <p className="py-1"> <b>April 2019 – Present</b></p>

                <ul>
                    <li>Led training sessions for new sites and radiologists on the Connect Radiology system.</li>

                    <li>Developed comprehensive training materials and methodologies to improve system adoption and usage.</li>

                    <li>Coordinated with technical teams to understand system updates and incorporate them into training.</li>
                </ul>

                <p className="py-1"> <b>Shift Lead </b></p>
                
                <p className="py-1"> <b>Sept. 2015 – April 2019</b></p>

                <ul>
                    <li>Managed and supported a team of customer service representatives.</li>

                    <li>Provided on-call support and was instrumental in troubleshooting system outages and technical issues.</li>

                    <li>Played a key role in training new hires and supporting go-lives for new facilities.</li>
                </ul>

                <p className="py-1"> <b>Customer Service Representative </b></p>
                
                <p className="py-1"> <b>March 2012 – Sept. 2015</b></p>

                <ul>
                    <li>Handled calls from radiologists and medical facilities, serving as the first line of defense during system outages.</li>

                    <li>Monitored the Connect system, proactively identifying and resolving potential issues.</li>

                </ul>

                <h2 className="py-2">Technical Projects</h2>

                <hr className="border-3 line opacity-100"/>

                <h3 className="py-1">Group Projects</h3>

                <div className="py-2">

                {/* adding in target= blank to open in new page. rel= noopener and noreferrer to prevent the new page from gaining access to the original page context */}
                <a href="https://christmas-cookie-clicker.onrender.com/" target="_blank" rel="noopener noreferrer" className="linktxt"> <b>Christmas Cookie Clicker:</b> </a> 
                <p>Utilized MERN stack to create a fun JavaScript game. Features include user authentication, score tracking, and JWT for profile verification.</p>

                <a href="https://github.com/EBOX26/Commode-Critic" target="_blank" rel="noopener noreferrer" className="linktxt"> <b>Commode Critic:</b> </a> 
                <p>Focused on Node.js, OOP, Express, SQL, Handlebars, and MVC. Developed an app for rating public bathrooms, including database creation and data fetching.</p>

                <a href="https://github.com/EBOX26/Commode-Critic" target="_blank" rel="noopener noreferrer" className="linktxt"> <b>Movie Reels:</b> </a> 
                <p>Leveraged frontend JavaScript, APIs, HTML, and CSS to create an app for managing a movie watch list. Integrated IMDB and YouTube APIs for movie descriptions, posters, and trailers.</p>

                </div>

                <h2 className="py-1">Skills</h2>

                <hr className="border-3 line opacity-100"/>

                <ul>
                    <li><b>Programming Languages & Frameworks:</b> JavaScript, React, Node.js, Express.js</li>
                    <li><b>Databases:</b> MongoDB, MySQL</li>
                    <li><b>Web Technologies:</b> HTML5, CSS3, APIs, PWA</li>
                    <li><b>Tools:</b> Git, Handlebars, Bootstrap</li>
                    <li><b>Soft Skills:</b> Leadership, Training & Development, Problem-Solving, Communication</li>
                </ul>

                <h2 className="py-1">Certifications</h2>

                <hr className="border-3 line opacity-100"/>

                <p>UNC Charlotte Boot Camp</p>

                <h2 className="py-1">Interests</h2>

                <hr className="border-3 line opacity-100"/>

                <ul>
                    <li>Continuously learning new coding languages.</li>
                    <li>Developing small fan games or indie games with my wife.</li>
                </ul>

            </div>

        </div>
    );
}