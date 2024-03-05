import Shoe from '@models/shoe.model';

import './ShoeInfo.css';
import { useState } from 'react';

function ShoeInfo(props: { className?: string; key?: string; shoe: Shoe }) {
  const [inCart, setInCart] = useState(false);

  const toggleInCart = () => {
    setInCart(!inCart);
  };

  return (
    <>
      <div className={'flex-col' + ' ' + props.className}>
        <div
          className={
            'z-10 relative flex h-[380px] rounded-[30px] items-center bg-' + props.shoe.color
          }
        >
          <img
            src={props.shoe.image}
            alt=''
            className='product-image block w-[100%] rotate-[-24deg] ml-[-16px] bg-none'
          />
        </div>
        <div className='font-bold text-[20px] mt-[26px] mb-[20px]'>{props.shoe.name}</div>
        <div className='text-grey text-[13px] leading-[1.8] mb-[20px]'>
          {props.shoe.description}
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-[18px]'>${props.shoe.price}</div>
          <div
            className='flex relative box-border
						bg-yellow font-bold text-[14px]
						w-auto min-w-[46px] h-[46px] py-[16px] px-[20px]
						items-center
						rounded-[100px]
						'
            onClick={toggleInCart}
          >
            {inCart ? (
              <div className='flex absolute items-center justify-center w-[16px] h-[16px]'>
                <img
                  src='assets/images/check.png'
                  alt=''
                  className='w-[100%] h-[100%] absolute left-[-25%] '
                />
              </div>
            ) : (
              'ADD TO CART'.toUpperCase()
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoeInfo;
