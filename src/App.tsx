import { useContext, useEffect } from 'react';
import Section from '@components/Section';
import ShoeInfo from '@components/ShoeInfo';
// import Shoe from '@models/shoe.model';
import { StockContext } from '@stores/StockContext';
import useStockStore from '@stores/StockStore';
import useCart from '@stores/CartStore';
import ItemInfo from '@components/ItemInfo';

function App() {
  const stock = useContext(StockContext);

  const myStock = useStockStore((state) => state.stock);
  const updateStock = useStockStore((state) => state.update);

  const cartItems = useCart((state) => state.items);
  const cartTotalPrice = useCart((state) => state.totalPrice);

  useEffect(() => {
    updateStock(stock);
  }, [myStock]);

  return (
    <div
      id='app'
      className='max-w-[760px] h-[100vh]
			flex flex-row flex-wrap 
			items-center justify-between justify-items-center
			py-0 my-0 mx-auto px-[20px] text-black
			before:bg-yellow before:content-[""]
			before:block before:fixed 
			before:top-1/2 before:left-1/2 
			before:w-[300%] before:h-full 
			before:-translate-x-[50%] before:-skew-y-[8deg]
			before:rounded-[100%]
			before:animate-flutter
			'
    >
      <Section id='store-section' title='Our Products' className='flex-1'>
        {Array.from(myStock, ([_, value]) => value).map((shoe, index) => (
          <ShoeInfo
            key={'shoe_' + shoe.id}
            shoe={shoe}
            className={index == 0 ? 'mb-[40px]' : 'my-[40px]'}
          />
        ))}
      </Section>
      <Section
        id='cart-section'
        title='Your cart'
        subTitle={cartTotalPrice === 0 ? '' : '$' + cartTotalPrice.toFixed(2)}
        className='flex-1'
      >
        {cartItems.size == 0 ? (
          <p className='text-black text-[14px] my-[14px]'>Your cart is empty.</p>
        ) : (
          Array.from(cartItems, ([_, value]) => value).map((cartItem, _) => (
            <ItemInfo key={'item_' + cartItem.id} item={cartItem} />
          ))
        )}
      </Section>
    </div>
  );
}

export default App;
