// footer with contact info for all pages that are not Contact info. 

function pagefooter() {
    return (
        <section className="pt-5">
            <h4 className="text-center pb-4">Contact Me</h4>
            <div className="d-flex justify-content-evenly">

            <p className="d-flex">Email: &nbsp; {" "} 
                <a href="mailto:miguel.maldonado5802@gmail.com" target="_blank" rel="noopener noreferrer" className="linktxt">MiguelMaldonado5802@gmail.com </a>
            </p>

            <p className="d-flex">GitHub: &nbsp; {" "} 
                <a href="https://github.com/TrueMiguel" target="_blank" rel="noopener noreferrer" className="linktxt">
                <i className="fab fa-github"> </i> My GitHub Profile
                </a>
            </p>

            <p className="d-flex">LinkedIn: &nbsp; {" "} 
                <a href="https://www.linkedin.com/in/miguel-maldonado-ab52602ab/" target="_blank" rel="noopener noreferrer" className="linktxt"> My LinkedIn Page
                </a>
            </p>
            </div>
        </section>
    )
}

export default pagefooter;