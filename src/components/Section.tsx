import './Section.css';

function Section() {
  return (
    <div className='overflow-hidden flex-1 shrink-0 relative py-0 bg-white section-card w-[360px] h-[600px] rounded-[30px] px-[28px] mb-[20px] box-border'>
      <div className='section-content before:content-[""] before:block before:absolute before:w-[300px] before:h-[300px] before:rounded-[100%] before:bg-yellow before:-top-[20%] before:-left-[50%] before:z-0'>
        Card
      </div>
    </div>
  );
}

export default Section;
