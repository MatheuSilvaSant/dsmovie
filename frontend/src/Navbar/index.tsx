import { ReactComponent as GithubIcon } from '../../src/assets/img/github.svg';
import './style.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/DevSuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;