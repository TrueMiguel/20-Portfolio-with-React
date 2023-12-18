// component for projects card
import { useState, useEffect } from 'react';

// imported the DB
import DB from '../database/db'

// creating how each card will show up.
export default function Card() {
    const cardStyle = {
        width: "50rem",
    };

    const [projects, setProjects] = useState([]);

    // accessing the DB array
    useEffect(() => {
        setProjects(DB);
    }, [])

    console.log(projects)

    return (
        <div className='container flex-box'>
            {projects.map((project) => (

            <div className='card p-4' style={cardStyle} key={project.id}>
                <a href={project.site}>
                    <h2><b>{project.name}</b></h2>
                    <p><b>{project.builtWith}</b></p>
                </a>
            </div>
            ))}
        </div>
    );
}