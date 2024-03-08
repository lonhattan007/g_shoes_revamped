import { useContext, useEffect } from 'react';
import Section from '@components/Section';
import ShoeInfo from '@components/ShoeInfo';
// import Shoe from '@models/shoe.model';
import { StockContext } from '@stores/StockContext';
import useStockStore from '@stores/StockStore';
import useCart from '@stores/CartStore';

function App() {
  const stock = useContext(StockContext);

  const myStock = useStockStore((state) => state.stock);
  const updateStock = useStockStore((state) => state.update);

  const cartTotalPrice = useCart((state) => state.totalPrice);

  useEffect(() => {
    updateStock(stock);
    console.log(myStock);
  }, [myStock]);

  return (
    <div
      id='app'
      className='justify-items-center w-full h-full bg-white 
			text-black
			before:bg-yellow before:content-[""]
			before:block before:fixed 
			before:top-1/2 before:left-1/2 
			before:w-[300%] before:h-full 
			before:-translate-x-[50%] before:-skew-y-[8deg]
			before:rounded-[100%]
			before:animate-flutter
			'
    >
      <div
        id='app-content'
        className='flex relative flex-col md:flex-row flex-wrap 
				items-center 
				py-0 my-0 mx-auto h-[100vh] px-[20px] max-w-[760px]'
      >
        {/* justify-between */}
        <Section id='store-section' title='Our Products'>
          <div className='overflow-scroll'>
            {Array.from(myStock, ([_, value]) => value).map((shoe, index) => (
              <ShoeInfo
                key={'shoe_' + shoe.id}
                shoe={shoe}
                className={index == 0 ? 'mb-[40px]' : 'my-[40px]'}
              />
            ))}
          </div>
        </Section>
        <Section
          id='cart-section'
          title='Your cart'
          subTitle={cartTotalPrice === 0 ? '' : '$' + cartTotalPrice.toFixed(2)}
        >
          <p className='text-black text-[14px] my-[14px]'>Your cart is empty.</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
