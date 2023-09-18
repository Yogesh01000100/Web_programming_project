import React from 'react';
import './index_1.css';
import { FaCodepen } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsDiscord } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';

const Footer = () => {



    return (
        <>
            <div className="footer colsf">
                <div className='footer_align'>
                    <div className='ghi'>
                        <div>
                            <NavLink exact to="/" className="nav-logo">
                                <div className='kol'>
                                    <div className='lok_1'><FaCodepen /></div>
                                    <div className='had_1'>Decentron</div>

                                </div>

                            </NavLink>
                        </div>
                        <div className='kol'>
                            <div className='lok_2'><BiCopyright /></div>
                            <div > 2023 Decentron. All rights reserved</div>
                        </div>
                    </div>

                    <div className='footer_align sol'>
                        <div className='ghi'>
                            <div className='head'>Services</div>
                            <div className='spacer_1'>
                                <div className='spacer'>
                                    Blockchain Explorer
                                </div>
                                <div className='spacer'>
                                    Crypto API
                                </div>
                                <div className='spacer '>
                                    Trade
                                </div>
                                <div className='spacer'>
                                    Sitemap
                                </div>
                            </div>
                        </div>
                        <div className='ghi'>
                            <div className='head'>About us</div>
                            <div className='spacer_1'>
                                <div className='spacer'>
                                    Blockchain Explorer
                                </div>
                                <div className='spacer'>
                                    Crypto API
                                </div>
                                <div className='spacer '>
                                    Trade
                                </div>
                                <div className='spacer'>
                                    Sitemap
                                </div>
                            </div>
                        </div>
                        <div className='ghi'>
                            <div className='head'>Learn</div>
                            <div className='spacer_1'>
                                <div className='spacer'>
                                    Blockchain Explorer
                                </div>
                                <div className='spacer'>
                                    Crypto API
                                </div>
                                <div className='spacer '>
                                    Trade
                                </div>
                                <div className='spacer'>
                                    Sitemap
                                </div>
                            </div>
                        </div>
                        <div className='ghi ihg'>
                            <div className='head'>Community</div>
                            <div className='spacer_1'>
                                <div className='mn'>
                                    <div className='spacer pads'>
                                        <BsInstagram />
                                    </div>
                                    <div className='spacer pads'>
                                        <BsFacebook />
                                    </div>
                                    <div className='spacer pads'>
                                        <BsTelegram />
                                    </div>
                                    <div className='spacer pads'>
                                        <BsDiscord />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
