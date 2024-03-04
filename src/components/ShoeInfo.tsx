import Shoe from '@models/shoe.model';

function ShoeInfo(props: Shoe) {
  return (
    <>
      <div className='flex-col'>
        {props.id}
        {props.name}
        {props.color}
        {props.image}
        {props.price}
        {props.description}
      </div>
    </>
  );
}

export default ShoeInfo;
