import CartItem from '@models/cartItem.model';
import trashLogo from '@assets/images/trash.png';
import useCart from '@stores/CartStore';
import './ItemInfo.css';

const ItemInfo = (props: { className?: string; key?: string; item: CartItem }) => {
  const addItem = useCart((state) => state.addItem);
  const removeItem = useCart((state) => state.removeItem);
  const deleteItem = useCart((state) => state.deleteItem);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(props.item);
  };

  const handleRemoveItem = (e: React.FormEvent) => {
    e.preventDefault();
    removeItem(props.item);
  };

  const handleDeleteItem = (e: React.FormEvent) => {
    e.preventDefault();
    deleteItem(props.item);
  };

  return (
    <div className='flex flex-row py-[20px]'>
      <div className='flex-grow-0 flex-shrink'>
        <div
          className='w-[90px] h-[90px] rounded-[100%] mr-[9px]'
          style={{ background: props.item.color || '#eee' }}
        >
          <div>
            <img
              className='item-image block max-w-[140%] w-[140%] rotate-[-28deg] translate-y-[-35px] -translate-x-5'
              src={props.item.image}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='flex-1 flex-col '>
        <p className='text-[14px] font-bold leading-[1.5] mb-[10px]'>{props.item.name}</p>
        <p className='text-[20px] font-bold mb-[16px]'>${props.item.price}</p>
        <div className='flex flex-row justify-between'>
          <div className='flex-1 flex items-center justify-start'>
            <button
              className='bg-[#eee] hover:bg-[#ddd] leading-[28px] text-[16px] font-bold w-[28px] h-[28px] rounded-[100%] items-center justify-center'
              onClick={handleRemoveItem}
            >
              -
            </button>
            <div className='text-[14px] mx-[8px] w-20px text-center'>{props.item.quantity}</div>
            <button
              className='bg-[#eee] hover:bg-[#ddd] leading-[28px] text-[16px] font-bold w-[28px] h-[28px] rounded-[100%] items-center justify-center'
              onClick={handleAddItem}
            >
              +
            </button>
          </div>
          <div className='delete-button flex bg-yellow hover:bg-yellow-dark w-[28px] h-[28px] rounded-[100%] items-center justify-center'>
            <button onClick={handleDeleteItem}>
              <img className='w-[16px] h-[16px]' src={trashLogo} alt='' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
