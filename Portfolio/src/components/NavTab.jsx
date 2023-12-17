import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (

        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link to="/"
                className={ currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>

        </ul>
    );
}

export default NavTabs;