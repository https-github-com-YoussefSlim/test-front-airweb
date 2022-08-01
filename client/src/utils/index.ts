import { Product } from '@/types';

export const year = new Date().getFullYear();
export const sortLabel = (a: { label: string }, b: { label: string }) =>
  `${a.label}`.replace(/([^\D])\s\x\s/g, '').localeCompare(b.label.replace(/([^\D])\s\x\s/g, ''));

export const convertPrice = (price: number) => price / 100;

export const totalCart = (items: Product[]) =>
  items.reduce((total, item) => total + convertPrice(item.price), 0);
