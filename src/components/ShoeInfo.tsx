import Shoe from '@models/shoe.model';
import checkLogo from '@assets/images/check.png';
import './ShoeInfo.css';
import React, { useEffect, useState } from 'react';
import useCart from '@stores/CartStore';

function ShoeInfo(props: { className?: string; key?: string; shoe: Shoe }) {
  const cartItems = useCart((state) => state.items);
  const [inCart, setInCart] = useState(cartItems.has(props.shoe.id));

  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setInCart(true);
    addItem(props.shoe);
  };

  useEffect(() => {
    setInCart(cartItems.has(props.shoe.id));
  }, [cartItems]);

  return (
    <>
      <div className={'flex-col ' + (props.className || '')}>
        <div
          className={'z-10 relative flex h-[380px] rounded-[30px] items-center'}
          style={{ background: props.shoe.color || '#eee' }}
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
          >
            {inCart ? (
              <div className='product-button flex absolute items-center justify-center w-[16px] h-[16px]'>
                <img src={checkLogo} alt='' className='w-[100%] h-[100%] absolute left-[-25%] ' />
              </div>
            ) : (
              <button className='product-button' type='button' onClick={handleAddToCart}>
                {'ADD TO CART'.toUpperCase()}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoeInfo;
