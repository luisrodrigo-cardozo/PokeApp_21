import React from 'react';
import logopoke1 from '../images/pokeapi_256.888baca4.png';

const Footer = () => {
    return (
        <>
            <div>
                <footer className="footer text-center bg-dark text-white">
                    <div className="container">
                        <div className="row">
                            {/*Footer Location */}
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Location</h4>
                                <p className="lead mb-0">
                                    San Miguel de Tucuman
                            <br />
                            Argentina
                        </p>
                            </div>
                            {/* Footer Social Icons */}
                            <div className="col-lg-4  mb-5 mb-lg-0">
                                <img src={logopoke1} />
                                <h4 className="text-uppercase mb-4">Around the Web</h4>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                            </div>
                            {/*Footer About Text */}
                            <div className="col-lg-4">
                                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                                <p className="lead mb-0">
                                    Pokeapp is a free and licensed application created by
                            <a href="http://www.pokemon.com">TeamPokeAdd</a>

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}


export default Footer