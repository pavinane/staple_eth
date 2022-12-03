import React from "react";
import "./Block.scss";
import { CardsData } from "../Data/cardsData";
// import Web3 from "web3";
import { Link } from "react-router-dom";

function BlockNav(props) {

    return (

        <div className='relative'>

            <div className='block-content'>

                <div className="container mx-auto flex flex-row justify-between items-center p-4 ">
                    <div className='logo basis-1/4'>
                        <h3 className='text-pink '>_Staple</h3>
                    </div>


                    <div className='menus flex space-x-6'>


                        {props.appState.isLoggedIn === true ? (

                            <div className='hidden md:flex space-x-6 items-center' >

                                <Link to="#">Home</Link>
                                <Link to="#">Write</Link>
                                <Link to="#">Explore</Link>
                                <Link to="#">staple</Link>
                            </div>

                        ) : <div className='hidden md:flex space-x-6 items-center'>
                            <Link to="#">
                                How we build
                            </Link>

                            <Link to="#">
                                Refer & Earn
                            </Link>
                        </div>}

                        <button
                            className="bg-orange-400 p-2 w-25 h-10 rounded-sm"
                            onClick={props.ConnectWallet}
                        >
                            {props.appState.account !== "" ? (
                                <>{props.appState.account.slice(0, 4) + ".." + props.appState.account.slice(-4)}</>
                            ) : (
                                <>Connect Wallet</>
                            )}
                        </button>

                    </div>
                </div>
                <div className='w-3/4 text-center m-0 m-auto mt-16' >
                    <h1 className='font-bold text-4xl  leading-normal mb-5'>
                        Organize all your content<br /> in one place
                    </h1>
                    <p className='leading-normal text-lg mb-4'>Building a gatherer economy for creators & <br /> consumers on Web3</p>
                    <button className='bg-orange-400 p-3 rounded-sm w-64 mb-3'>Early Bird Signup</button><br />
                    <span className='text-md '>Get 100 Staple Tokens on Launch*</span>
                </div>


            </div>

            <CardsBlock />
        </div>
    );
}

const CardsBlock = () => {
    return (
        <div className="crds-blk flex">
            <div className="crds-blk shadow-lg shadow-indigo-500/40  xl:w-[1000px] md:w-[1000px]  m-0 m-auto h-46 bg-white rounded-md p-6 flex flex-col  xl:flex-row xl:space-x-6 md:flex-row md:space-x-6 ">
                {CardsData.map((items) => {
                    return (
                        <div className="crds flex-auto flex flex-row">
                            <div className="flex-none w-14  bg-orange-300 h-14 rounded-full p-3">
                                <img src={items.img} alt="" />
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <div className="flex-auto">
                                <h1 className="font-bold leading-10">{items.name}</h1>
                                <p>{items.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlockNav;
