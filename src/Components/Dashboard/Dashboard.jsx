import React from 'react';
import { StaticsData } from '../../Data/staticsData';

const Dashboard = () => {
    return(
        <div className='container mx-auto '>
            <Statics />
        </div>
    )
}

const Statics = () => {
    return(
        <div className='statics my-10'>
            <div>
                <div className='flex flex-row justify-between'>
                <h1 className='xl:font-bold xl:text-2xl'>This month</h1>
                <button className='xl:w-[150px] bg-[red] h-12 rounded-xl text-white'>Create +</button>
                </div>
                
                <div className='flex flex-row space-x-12 my-10'>
                  
                        {
                          StaticsData.map((item) => {
                            return(
                                <div className='flex space-x-6'>
                                   <div>
                                        <h1 className='font-bold text-2xl'>{item.number}</h1>
                                       &nbsp;
                                        <p className='text-sm text-zinc-600'>{item.name}</p>
                                    </div>
                                    <img src={item.img} alt="" />

                                </div>
                            )
                          })  
                        }
                    
                  
                </div>
            </div>
        </div>
    )
}

export default Dashboard