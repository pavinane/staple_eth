import React,{useState} from 'react';
import './Block.scss'
import {CardsData} from '../Data/cardsData'
import Web3 from "web3";

function BlockNav() {
    const [address, setAddress] = useState([]);

  async function requiredWallet() {
    const web = new Web3(window.ethereum);

    if (web) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setAddress(accounts);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("metamak need");
    }
  }
    return (

        <div className='relative'>
      
        <div className='block-content'>

            <div class="container mx-auto flex flex-row justify-between items-center ">
                <div className='logo basis-1/4'>
                    <h3 className='text-pink '>_Staple</h3>
                </div>
                {
                    address ? (
                        null
                    ):(<div>
                        <ul>
                            <li>Home</li>
                            <li>Write</li>
                            <li>Explore</li>
                            <li>staple</li>
                         
                        </ul>
                    </div>)
                }
                
                <div className='menus '>
                    <ul>
                        <li>
                            How we build
                        </li>
                        <li>
                            Refer & Earn
                        </li>
                        <li>
                            <button className='bg-orange-400 p-2 w-25 h-10 rounded-sm' onClick={requiredWallet}>
                                Connect Wallet
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='w-3/4 text-center m-0 m-auto mt-16' >
                <h1 className='font-bold text-5xl leading-normal mb-5'>
                    Organize all your content<br/> in one place
                </h1>
                <p className='leading-normal text-2xl mb-4'>Building a gatherer economy for creators & <br/> consumers on Web3</p>
                <button className='bg-orange-400 p-3 rounded-sm w-64 mb-3'>Early Bird Signup</button><br/>
                <span className='text-md '>Get 100 Staple Tokens on Launch*</span>
            </div>


        </div>

          <CardsBlock />    
        </div>
       
    )
}


const CardsBlock = () => {
    return(
        <div className='crds-blk flex'>
            <div className='crds-blk shadow-lg shadow-indigo-500/40  w-[1000px]  m-0 m-auto h-46 bg-white rounded-md p-6 flex flex-row'>
                {
                    CardsData.map((items) => {
                        return(
                            <div className='crds flex-auto flex flex-row '>
                                <div className='flex-none w-14  bg-orange-300 h-14 rounded-full p-3'>
                                    <img src={items.img} alt="" />
                                </div>
                                &nbsp;&nbsp;&nbsp;
                                <div className='flex-auto'>
                                    <h1 className='font-bold leading-10'> 
                                        {items.name}
                                    </h1>
                                    <p>{items.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}




export default BlockNav;