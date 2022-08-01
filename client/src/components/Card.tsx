import { useContext } from 'react';

import { CartAdd } from '@/assets/icons';
import { CartContext } from '@/contexts';
import { Product } from '@/types';
import { convertPrice } from '@/utils';

export function Card(props: Product) {
  // eslint-disable-next-line camelcase
  const { description, label, price, thumbnail_url } = props;
  const { toggleAddProductToCart } = useContext(CartContext);

  return (
    <article className=" relative flex justify-between w-[386px] gap-3 items-center bg-white rounded-xl shadow-lg p-[10px] md:flex-col md:w-[403px] md:items-start">
      <div className="flex">
        <div className="w-[60px] h-[60px] mr-[18px] self-center md:self-start">
          <img
            alt={label}
            className="clip-circle"
            // eslint-disable-next-line camelcase
            src={thumbnail_url || '/not-found.jpg'}
          />
        </div>
        <div className="">
          <h3 className="text-md font-bold w-48 whitespace-nowrap overflow-hidden text-ellipsis  text-black mb-4">
            {label}
          </h3>
          <p className=" w-[209px] ellipsis md:w-[305px] ">{description}</p>
        </div>
      </div>
      <div
        className=" col
      self-end
      w-[36px] h-[29px]
      border-cart
      bg-color-price
      whitespace-nowrap
      font-bold
      md:h-[38px]
      md:row
      md:w-full
      md:justify-between
      md:items-center

     "
      >
        <span className=" absolute top-0 right-0  p-[10px] bg-gray-300 rounded-tr-[4px] rounded-bl-[4px]  md:static md:rounded-[10px] md:h-full ">
          {convertPrice(price)}€
        </span>
        <button
          className="
          bg-[#08104D]
          rounded-[10px]
          border
          text-white
          hover:text-[#08104D] hover:border-[#08104D]
          hover:bg-white
          transition
          duration-500
        "
          type="button"
          onClick={toggleAddProductToCart(props)}
        >
          <div className="row items-center justify-center uppercase font-bold col w-[36px] h-[29px] rounded-[4px] md:w-[193px] md:h-[38px] md:row md:justify-around ">
            <CartAdd />
            <span className="hidden md:block text-sm">Ajouter Au panier</span>
          </div>
        </button>
      </div>
    </article>
  );
}
