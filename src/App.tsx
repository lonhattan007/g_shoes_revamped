import Section from '@components/Section';

function App() {
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
      {/*
			before:-z-[1]
		*/}
      <div
        id='app-content'
        className='flex relative flex-col md:flex-row flex-wrap 
				items-center 
				py-0 my-0 mx-auto h-[100vh] px-[20px] max-w-[760px]'
      >
        {/* justify-between */}
        <Section title='Our Products' />
        <Section title='Your cart' />
      </div>
    </div>
  );
}

export default App;
