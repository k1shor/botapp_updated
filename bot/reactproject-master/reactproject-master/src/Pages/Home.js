import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import botReducer from '../reducers/botReducer'

const Home = () => {
    let bot = useSelector(store => store.bots)



    return (
        <>
            <Nav />


            <div className='container home-banner my-3 mx-auto p-5'>
                <div className='home-card'>
                    <ul className='list-unstyled'>
                        <li>Discover</li>
                        <li>Explore &</li>
                        <li>Try it.</li>

                    </ul>
                </div>
            </div>


            <div className='container my-3 mx-auto p-5 home-div2 text-center'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='topic fs-2 custom-background1 mt-3 mb-5'>
                            Using bots is the way of the future.
                        </div>
                        <div className='brief custom-background1 fs-5 mt-5 '>
                            Bots are small programs that run inside Telegram that enable automation.
                            Third-party developers make bots using the Telegram Bot API.
                            Telegram does have a few official bots for specific purposes.
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 justify-content-center '>
                        <img src='./BOT_IMAGE/bt2.png'></img>
                    </div>
                </div>
            </div>
{/* q n a  */}
            <div className='container mx-auto custom-background2 my-3'>

                <div className='custom-heading fw-bold'>
                    Why SignUp?
                </div>
                <hr className='w-75 mx-auto' />
                <li className='custom-text mb-5 custom-li'>
                    TBAC provides reliable bots to users.
                </li>

                <hr />
                <div className='custom-heading fw-bold'>
                    Why use TBAC?
                </div>
                <hr className='w-75 mx-auto' />
                <li className='custom-text mb-5 custom-li'>
                    Eliminates fake bots and reduce user effort.
                </li>

                <hr />
                <div className='custom-heading fw-bold'>
                    How does it work?
                </div>
                <hr className='w-75 mx-auto' />
                <li className='custom-text mb-5 custom-li'>
                    Create account, Login and you are ready to explore tons of bot that make your day easier.
                </li>


            </div>

            <div className='container mx-auto custom-background2'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col p-2">
                        <div className="card">
                            <div className='card-img-container'>
                                <img src='./BOT_IMAGE/bot4.jpg' className="card-img-top custom-image" alt="..." height={200} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Gaming BOTS</h5>
                                <p className="card-text">

                                </p>

                                <a href='/gaming' className='text-decoration-none' >See More...</a>


                            </div>
                        </div>
                    </div>

                    <div className="col p-2">
                        <div className="card">
                            <div className='card-img-container'>
                                <img src='./BOT_IMAGE/bot5.jpg' className="card-img-top custom-image" alt="..." height={200} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Music BOTS</h5>
                                <p className="card-text">

                                </p>

                                <a href='/music' className='text-decoration-none' >See More...</a>


                            </div>
                        </div>
                    </div>

                    <div className="col p-2">
                        <div className="card">
                            <div className='card-img-container'>
                                <img src='./BOT_IMAGE/bot1.jpg' className="card-img-top custom-image" alt="..." height={200} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Entertainment BOTS</h5>
                                <p className="card-text">

                                </p>

                                <a href='/entertainment' className='text-decoration-none' >See More...</a>


                            </div>
                        </div>
                    </div>

                    <div className="col p-2">
                        <div className="card">
                            <div className='card-img-container'>
                                <img src='./BOT_IMAGE/bot2.jpg' className="card-img-top custom-image" alt="..." height={200} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Utility BOTS</h5>
                                <p className="card-text">

                                </p>

                                <a href='/utility' className='text-decoration-none' >See More...</a>


                            </div>
                        </div>
                    </div>



                </div>
            </div>





            <Footer />


        </>
    )
}

export default Home