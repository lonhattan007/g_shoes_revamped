import { ReactNode } from 'react';
import './Section.css';

function Section(props: { title: string; id?: string; children?: ReactNode }) {
  return (
    <div
      className='section-card
			text-left
			overflow-hidden relative flex-col
			py-0 px-[28px] mb-[20px]
			w-[360px] h-[100vh] rounded-[30px]
			bg-white box-border
			z-0
			'
    >
      <div
        className='section-content flex-col
				before:content-[""] before:block
				before:w-[300px] before:h-[300px] before:rounded-[100%]
				before:bg-yellow
				before:absolute before:-top-[20%] before:-left-[50%]
				before:z-[-1]
				'
      >
        <div className='mx-0 my-[12px] relative z-10'>
          <img src='assets/images/nike.png' alt='Nike Logo' className='w-[50px]' />
        </div>
        <div className='text-[24px] font-bold z-20'>{props.title}</div>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
