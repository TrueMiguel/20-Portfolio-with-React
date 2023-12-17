import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (

        <ul className='nav nav-tabs bg-light justify-content-end'>
            <li className='nav-item'>
                <Link to="/"
                className={ currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/portfolio"
                className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>

        </ul>
    );
}

export default NavTabs;