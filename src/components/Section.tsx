import { ReactNode } from 'react';
import './Section.css';

function Section(props: {
  title?: string;
  subTitle?: string;
  id?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        `section-card
				text-left
				relative
				py-0 px-[28px] sm:mx-auto sm:my-[20px] md:mb-[20px] md:mt-0 md:mx-0
				w-[360px] h-[600px] rounded-[30px]
				bg-white box-border overflow-hidden
				before:content-[""] before:block
				before:w-[300px] before:h-[300px] before:rounded-[100%]
				before:bg-yellow
				before:absolute before:-top-[20%] before:-left-[50%]
				before:z-0
				 ` + (props.className || '')
      }
    >
      <div className='mx-0 my-[12px] relative z-10'>
        <img src='assets/images/nike.png' alt='Nike Logo' className='w-[50px]' />
      </div>
      <div className='text-[24px] font-bold z-20 relative my-[16px] flex content-between'>
        <p className='flex-1'>{props.title}</p>
        {props.subTitle && <p className='flex-1 text-right'>{props.subTitle}</p>}
      </div>
      <div className='section-body relative h-[calc(100%-98px)] overflow-y-scroll'>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
