import { useContext, useEffect } from 'react';
import Section from '@components/Section';
import ShoeInfo from '@components/ShoeInfo';
// import Shoe from '@models/shoe.model';
import { StockContext } from '@stores/StockContext';
import useStockStore from '@stores/StockStore';
import useCart from '@stores/CartStore';
import ItemInfo from '@components/ItemInfo';
import { saveMapToLocalStorage } from '@utils/mapToLocalStorage';
import { LS_CART_ITEMS } from './constants/localStorageKeys';

function App() {
  const stock = useContext(StockContext);

  const myStock = useStockStore((state) => state.stock);
  const updateStock = useStockStore((state) => state.update);

  const cartItems = useCart((state) => state.items);
  const cartTotalPrice = useCart((state) => state.totalPrice);

  useEffect(() => {
    updateStock(stock);
  }, [myStock]);

  useEffect(() => {
    saveMapToLocalStorage(cartItems, LS_CART_ITEMS);
  }, [cartItems]);

  return (
    <div
      id='app'
      className='max-w-[800px] h-[100vh] relative
			flex 
			items-center justify-between
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
      <Section id='store-section' title='Our Products'>
        {Array.from(myStock, ([_, value]) => value).map((shoe, index) => (
          <ShoeInfo
            key={'shoe_' + shoe.id}
            shoe={shoe}
            className={index == 0 ? 'mb-[40px]' : 'my-[40px]'}
          />
        ))}
      </Section>
      <Section id='cart-section' title='Your cart' subTitle={'$' + cartTotalPrice.toFixed(2)}>
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
