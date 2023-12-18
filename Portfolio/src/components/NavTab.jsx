import { Link, useLocation } from 'react-router-dom';

//nav bar on the top right that show which tab is currently open
function NavTabs() {
    const currentPage = useLocation().pathname;

    return (

        // had to adjust the nav bar since there was issues with the styling. 
        <ul className='nav flex-column flex-sm-row align-items-center h-auto pe-4'>
            <li className='nav-item'>
                <Link
                to="/"
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                <h3>About Me</h3>
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to="/portfolio"
                className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                >
                <h3>Portfolio</h3>
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;