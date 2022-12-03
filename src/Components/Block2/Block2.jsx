import React from 'react';
import { CreaterData } from '../../Data/cardsData';
import user from '../../Assests/user.png';


const Block2 = () => {
    return (
        <div className='blk_2 my-48 text-center container mx-auto px-4'>

            <div>
                <div className='w-1/2 mx-auto '>
                    <h1 className='font-bold text-3xl leading-normal'>Not just for Content Creators Build for Consumers & Organizers</h1>
                </div>
                <div>
                    <CreaterBlk />
                </div>
            </div>

            <div className='blk_3 flex flex-row'>
                <div className='basis-1/4'>
                    <h1>For User</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur ad ip isc ing elit. Con dimen tum nec faucibus justo, ac quam.</p>
                    <img src={user} alt="" />
                </div>
                <div className='basis-3/4'>

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