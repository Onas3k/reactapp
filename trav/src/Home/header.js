import './header.css'
import log from '../resources/log.svg'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-0 sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    <img className="logo" src={log} alt="Nekelo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Fees
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                Blog
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-danger ms--4 ml-4">Register</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;