import { useContext } from 'react';
import Section from '@components/Section';
import ShoeInfo from '@components/ShoeInfo';
// import Shoe from '@models/shoe.model';
import { OGStockContext } from '@stores/StockContext';

function App() {
  // const shoes: Array<Shoe> = useContext(StockContext);
  const stock = useContext(OGStockContext);

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
            {/*shoes.map((shoe, index) => (
							<ShoeInfo
								key={'shoe_' + shoe.id}
								shoe={shoe}
								className={index == 0 ? 'mb-[40px]' : 'my-[40px]'}
							/>
						))*/}
            {Object.keys(stock).map((key, index) => (
              <ShoeInfo
                key={'shoe_' + stock[key].id}
                shoe={stock[key]}
                className={index == 0 ? 'mb-[40px]' : 'my-[40px]'}
              />
            ))}
          </div>
        </Section>
        <Section id='cart-section' title='Your cart'>
          <p className='text-black text-[14px] my-[14px]'>Your cart is empty.</p>
        </Section>
      </div>
    </div>
  );
}

export default App;
