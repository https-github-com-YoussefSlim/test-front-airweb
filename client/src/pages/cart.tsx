import { useContext } from 'react';

import useTranslation from 'next-translate/useTranslation';

import { IconCart } from '@/assets/icons';
import { CartContext } from '@/contexts';
import { convertPrice, totalCart } from '@/utils';

export default function Cart() {
  const { t } = useTranslation('cart');
  const { products } = useContext(CartContext);
  const totalPrice = totalCart(products);

  return (
    <div className="col justify-center space-y-6 my-10 md:mt-16">
      <div className="row gap-4 items-center mb-4 text-black">
        <IconCart />
        <span className="font-bold whitespace-nowrap text-[#08104D] ">{t`Your basket`}</span>
      </div>
      <ul className="col justify-between space-y-6">
        {products?.map((p) => (
          <li key={p.id} className="row justify-between">
            <h3>{p.label}</h3>
            <span>{convertPrice(p.price)}€</span>
          </li>
        ))}
      </ul>
      <div className="row justify-between mb-[40px] bg-white   border border-[#08104D] text-[#08104D] font-bold p-3 rounded-[4px]">
        <p>{t`Total`}</p>
        <span className="font-bold">{totalPrice} €</span>
      </div>

      <button
        className="
        flex
        ml-auto
             bg-[#08104D]
             p-[10px]
          rounded-[4px]
          border
          text-white
          uppercase
          hover:text-[#08104D] hover:border-[#08104D]
          hover:bg-white
          transition
          duration-500
          "
        type="button"
      >
        {t`Go to payment`}
      </button>
    </div>
  );
}
