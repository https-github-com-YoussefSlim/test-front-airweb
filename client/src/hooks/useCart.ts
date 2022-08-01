import { useCallback, useState } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';

import { Product } from '@/types';

export const useCart = () => {
  const { t } = useTranslation('home');

  const [products, setProducts] = useState<Product[]>([]);

  const toggleAddProductToCart = useCallback(
    (product: Product) => () => {
      const isInCart = products.some((p) => p.id === product.id);

      setProducts((prevProducts) => {
        if (isInCart) {
          toast.info(t`product removed`);

          return prevProducts.filter((p) => p.id !== product.id);
        }

        toast.success(t`product added`);

        return [...prevProducts, product];
      });
    },
    [products, t]
  );

  return {
    products,
    toggleAddProductToCart,
  };
};
