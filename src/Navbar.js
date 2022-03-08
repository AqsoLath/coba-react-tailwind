import TombolMasuk, { TombolDaftar } from './comp_general/Tombol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faDownload, faUser, faTags, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'



function Navbar() {

    const [isNavbarOn, setIsNavbarOn] = useState(false);
    const location = useLocation();

    useEffect(function () {
        setIsNavbarOn(false)
    }, [location]);

    function navEventHandler() {
        !isNavbarOn ? setIsNavbarOn(true) : setIsNavbarOn(false);
        // const navLinks = document.querySelector("#nav-links");
        // const navCover = document.querySelector("#nav-cover")

        // navLinks.classList.toggle('hidden');
        // navCover.classList.toggle('hidden');

        document.addEventListener('click', function (event) {
            const navBar = document.querySelector('#nav');
            const navLinks = document.querySelector("#nav-links");


            let isClickInside = navBar.contains(event.target);

            if (!isClickInside) {
                navLinks.classList.add('hidden');
                // navCover.classList.add('hidden');
            }
        });

    }


    return (
        <div>
            <div className='fixed top-0 bottom-0 right-0 left-0 bg-hitam1/90 hidden z-10' id='nav-cover'></div>
            <div className="nav bg-hitam1 py-1 fixed top-0 right-0 left-0 z-20 border-y-2 border-emas1" id="nav">
                <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
                    <div className="flex justify-between p-2 items-center w-full">
                        <div className="w-full flex justify-between">
                            <h1 className="bold text-2xl text-emas1">
                                Aqs0GG.com
                            </h1>

                        </div>
                        <div>
                            <button className="block md:hidden text-putih ml-4 text-2xl" id="hamburger" onClick={navEventHandler}>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className={!isNavbarOn ? 'w-full hidden md:flex border-t-2 border-t-emas1 md:border-t-0 pt-3 md:pt-0' : " w-full md:flex border-t-2 border-t-emas1 md:border-t-0 pt-3 md:pt-0 "} id="nav-links" >
                        <div className="my-auto">
                            <TombolDaftar >DAFTAR</TombolDaftar>
                            <TombolMasuk>MASUK</TombolMasuk>
                        </div>
                        <div className="flex flex-col md:flex-row py-2  text-left text-md justify-evenly">
                            <Link to="/" className="mx-3 text-emas2 hover:text-yellow-600 transition font-semibold py-1">
                                Home
                            </Link>
                            <Link to="/promo" className="mx-3 text-emas2 hover:text-yellow-600 transition font-semibold py-1">
                                Promo
                            </Link>
                            <Link to="/" className="mx-3 text-emas2 hover:text-yellow-600 transition font-semibold py-1">
                                Tentang
                            </Link>
                            <Link to="/" className="mx-3 text-emas2 hover:text-yellow-600 transition font-semibold py-1">
                                Bantuan
                            </Link>
                            <Link to="/" className="mx-3 text-emas2 hover:text-yellow-600 transition font-semibold py-1">
                                Kontak
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export function NavbarBawah() {
    return (
        <div className='fixed bottom-0 left-0 right-0 py-2 px-1 bg-hitam1 border-t-2 border-t-putih'>
            <div className="container mx-auto">
                <div className="flex justify-around text-putih text-center">
                    <Link to="/">
                        <span>
                            <FontAwesomeIcon icon={faHouse} className="mx-auto"></FontAwesomeIcon>
                            <h2 className=''>Home</h2>
                        </span>
                    </Link>
                    <Link to="/about">
                        <span>
                            <FontAwesomeIcon icon={faDownload} className="mx-auto"></FontAwesomeIcon>
                            <h2 className=''>Download</h2>
                        </span>
                    </Link>
                    <Link to="/about">
                        <span>
                            <FontAwesomeIcon icon={faUser} className="mx-auto"></FontAwesomeIcon>
                            <h2 className=''>Masuk</h2>
                        </span>
                    </Link>
                    <Link to="/about">
                        <span>
                            <FontAwesomeIcon icon={faTags} className="mx-auto"></FontAwesomeIcon>
                            <h2 className=''>Promosi</h2>
                        </span>
                    </Link>
                    <Link to="/about">
                        <span>
                            <FontAwesomeIcon icon={faMessage} className="mx-auto"></FontAwesomeIcon>
                            <h2 className=''>Chat</h2>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;