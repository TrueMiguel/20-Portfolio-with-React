// component for projects card
import { useState, useEffect } from 'react';

// imported the DB
import DB from '../database/db'

// creating how each card will show up.
export default function Card() {
    const cardStyle = {
        height: '40vh',
        width: '80vh',
    };

    const [projects, setProjects] = useState([]);

    // accessing the DB array
    useEffect(() => {
        setProjects(DB);
    }, [])

    console.log(projects)

    return (
        <div className='d-flex justify-content-center'>
            <div className='container row justify-content-center'>
                {projects.map((project) => (

                <div 
                    className='card p-4 col-6 justify-content-center' style={{
                        ...cardStyle, 
                        transition: 'opacity 0.3s ease-in-out',
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} 
                    key={project.id} 
                    >
                    <div>  
                    <a href={project.site}>
                        <h2 style={{ }}><b>{project.name}</b></h2>
                        <p style={{ }}><b>{project.builtWith}</b></p>
                    </a>
                    </div>
                </div>
                
                ))}
            </div>
        </div> 
    );
}