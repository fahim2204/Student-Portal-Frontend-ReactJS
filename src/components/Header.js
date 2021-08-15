import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>

            <div className="container">
                <header className="blog-header pb-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1 d-flex">
                            <img src="https://img.icons8.com/material-outlined/40/000000/menu--v1.png" />
                            <form className="d-flex" action="{{route('home')}}" method="post">
                                <input className="w-100 form-control mx-4" type="text" name="search" id="search" placeholder="search" />
                                <input className="btn btn-primary rounded-3" type="submit" defaultValue="Search" />
                            </form>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="{{ route('home') }}">Student Portal</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <Link className="btn btn-outline-success me-3" to="/register">Register</Link>
                            <Link className="btn btn-outline-primary me-3" to="/login">Login</Link>
                            
                        </div>
                    </div>
                </header>

            </div>

        </>
    );
};
export default Header;