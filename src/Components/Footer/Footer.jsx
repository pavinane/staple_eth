// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import React from 'react';
import { footerCards } from '../../Data/cardsData';
import './Footer.scss';
const Footer = () => {
    return (
        <div className='footer bg-[#FFF1ED] p-20'>
            <div className='w-[1000px] mx-auto flex justify-between'>
                <div className='contact-add grid gap-4 w-[250px]'>
                    <div className='cont-desc'>
                        <h3 className='font-bold text-xl'>_Staple</h3>
                        &nbsp;
                        <p className='text-sm'>Building a gatherer economy for creators & consumers on Web3</p>
                    </div>
                    <div className='font-bold text-xl'>
                        <h1 >Contact</h1>
                        <div className='grid grid-cols-3 my-4 conn-icons'>
                            <i className="fa fa-envelope" />
                            <i className="fa fa-twitter" />
                            <i class="fa fa-whatsapp" />
                        </div>

                    </div>

                </div>
                <div className='foot-cont-link'>
    
                   <div className='grid grid-cols-4 gap-10'>
                        {
                            footerCards.map((items) => {
                                return(
                                    <div className='foot-lists'>
                                        <h1 className='font-bold text-lg'>{items.title}</h1>
                                        <ul>
                                                <li>{items.num1}</li>
                                                <li>{items.num2}</li>
                                                <li>{items.num3}</li>
                                            </ul>
                                    </div>
                                )
                            })
                        }
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer