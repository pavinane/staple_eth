import React from 'react';
import { PlatformCard } from '../../Data/cardsData';
import waiting from '../../Assests/waiting.png';

const Platform = () => {
    return (
        <div>
            <div className='bg-orange-300  p-10'>
                <div className='xl:w-[50%] sm:w-[100%] mx-auto text-center '>
                    <h1 className='font-bold xl:text-2xl sm:text-sm leading-snug mb-10'>Move your data from Other Platform</h1>
                    <div className='grid grid-cols-4 gap-6  justify-items-center py-4 items-center'>
                        {
                            PlatformCard.map((items) => {
                                return (
                                    <div>
                                        <img src={items.image} alt="" />
                                        &nbsp;
                                        <p>{items.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className='waiting_list my-16'>
                <div className='join-list grid sm:grid-cols-1 xl:grid-cols-2 xl:w-[1000px]  mx-auto'>
                    <div className='xl-w-[150px]'>
                         <img src={waiting} alt="" />    
                    </div>
                  
                    <div className='grid gap-4 self-start sm:px-4'>
                        <p className='xl:text-xl font-bold sx:text-sm'> _Staple</p>
                        <h1 className='xl:text-4xl sm:text-lg font-bold'>Join the waiting list</h1>
                        <h3 className='xl-text-2xl'>Building a gatherer economy for creators & consumers on Web3</h3>
                        <button className='sm:w-[150px] xl:w-[200px] p-4 bg-[#FF7449] text-white font-bold rounded-lg'>Early Bird Signup</button>
                        <span className='text-sm'>Get 100 Staple Tokens on Launch*</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Platform;