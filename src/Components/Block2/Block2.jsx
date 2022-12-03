import React from 'react';
import { Creatercard, CreaterData, Usercard } from '../../Data/cardsData';
import user from '../../Assests/user.png';
import creater from '../../Assests/creater.png';
import './Block2.scss';

const Block2 = () => {
    return (
        <div className='blk_2 my-48 text-center container mx-auto px-4 grid gap-12 ' >

            <div>
                <div className='w-1/2 mx-auto '>
                    <h1 className='font-bold text-3xl leading-normal'>Not just for Content Creators Build for Consumers & Organizers</h1>
                </div>
                <div>
                    <CreaterBlk />
                </div>
            </div>

            <div className='blk_3 grid gap-6'>
                <div className='flex flex-row p-8 justify-between '>
                    <div className='w-[20%] grid gap-4'>
                        <h1 className='font-bold text-xl text-start'>For User</h1>

                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur ad ip isc ing elit. Con dimen tum nec faucibus justo, ac quam.</p>

                        <img src={user} alt="" />
                    </div>
                    <div className='w-[60%] grid grid-cols-3 gap-4 relative'>
                        {

                            Usercard.map((items) => {
                                return (
                                    <div className=' shadow-md w-[260px] text-start bg-pink-300 h-[220px] p-4 rounded-lg' id={items.id}>
                                        <div className='flex justify-between'>
                                            <p className='rotate-45 text-xl text-#fafafa'>
                                                <i className="fa fa-map-pin " />
                                            </p>
                                            <h1 className="text-5xl w-[60px] text-gray-500">{items.no}</h1>
                                        </div>
                                        <h3 className='font-bold text-md'>{items.title}</h3>
                                        &nbsp;
                                        <p className='font-medium text-sm'>{items.desc}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-row p-8 justify-between '>

                    <div className='w-[60%] grid grid-cols-3 gap-4 relative'>
                        {

                            Creatercard.map((items) => {
                                return (
                                    <div className=' shadow-md w-[260px] text-start bg-pink-300 h-[220px] p-4 rounded-lg' id={items.id}>
                                        <div className='flex justify-between'>
                                            <p className='rotate-45 text-xl text-[#6B7280]'>
                                                <i className="fa fa-map-pin " />
                                            </p>
                                            <h1 className="text-5xl w-[60px] text-gray-500">{items.no}</h1>
                                        </div>
                                        <h3 className='font-bold text-md'>{items.title}</h3>
                                        &nbsp;
                                        <p className='font-medium text-sm'>{items.desc}</p>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-[20%] grid gap-4'>
                        <h1 className='font-bold text-xl text-start'>For Creater</h1>

                        <p className='text-start'>Lorem ipsum dolor sit amet, consectetur ad ip isc ing elit. Con dimen tum nec faucibus justo, ac quam.</p>

                        <img src={creater} alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Block2;

const CreaterBlk = () => {
    return (
        <div className='flex flex-row mt-24'>
            {
                CreaterData.map((item) => {
                    return (
                        <div className='basis-1/3 w-3/12 justify-items-center items-center '>
                            <img className='mx-auto h-48' src={item.img} alt="" />
                            &nbsp;
                            &nbsp;
                            <h2 className='font-bold text-xl'>{item.title}</h2>
                            &nbsp;
                            &nbsp;
                            <p className='w-3/4 mx-auto'>{item.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}