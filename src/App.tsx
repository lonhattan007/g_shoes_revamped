import Section from '@components/Section';

function App() {
  return (
    <div
      id='app'
      className='flex flex-nowrap justify-items-center w-full h-full bg-white before:bg-yellow before:content-[""]
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
        className='relative flex-wrap justify-between items-center my-0 mx-auto text-black bg-transparent z-1 w-50'
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus adipisci deserunt earum
          quia voluptas? A unde magnam esse blanditiis aliquid iusto officiis, architecto laboriosam
          expedita repudiandae aut delectus optio consequatur.
        </p>
        <Section />
      </div>
    </div>
  );
}

export default App;
