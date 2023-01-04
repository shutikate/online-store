import { useState, useMemo } from 'react';
import { IPromocode } from './types';

export const usePromo = (promocodes: IPromocode[], totalAmount: number) => {

  const getPromoFromLocalStorage = (): IPromocode[] => JSON.parse(localStorage.getItem('promo-shutikate') || '[]');
  const setPromoToLocalStorage = (appliedCodes: IPromocode[]) => localStorage.setItem('promo-shutikate', JSON.stringify(appliedCodes));

  const [ appliedCodes, setAppliedCodes] = useState<IPromocode[]>(getPromoFromLocalStorage());
  console.log(appliedCodes);
  const [ inputValue, setInputValue ] = useState<string>('');

  const totalAmountPromo = useMemo(() => {
    const totalDiscount = appliedCodes.reduce((acc, code) => {
      switch (code.type) {
        case 1:
          return acc + 10;
        case 2:
          return acc + 15;
        case 3:
          return acc + 5;
        default:
          return acc;
      }
    }, 0);
    totalDiscount
    return totalDiscount > 0 ? totalAmount - Math.ceil((totalAmount * (totalDiscount / 100))) : totalAmount;
  }, [totalAmount, appliedCodes]);

  const foundPromocode = useMemo(() => promocodes.find(code => code.id.toLowerCase() === inputValue.toLowerCase()), [promocodes, inputValue]);

  const isPromocodeApplied = (id: string) => appliedCodes.findIndex(code => code.id.toLowerCase() === id.toLowerCase()) > -1;

  const dropAppliedCode = (id: string) => {
    setAppliedCodes(appliedCodes.filter(code => code.id !== id));
    setPromoToLocalStorage(appliedCodes.filter(code => code.id !== id));
  };

  const addAppliedCode = (id: string) => {
    const promocode = promocodes.find(code => code.id.toLowerCase() === id.toLowerCase());
    if (promocode) {
      setAppliedCodes([...appliedCodes, promocode]);
      setPromoToLocalStorage([...appliedCodes, promocode]);
    }
  };

  return {
    appliedCodes,
    totalAmountPromo,
    inputValue,
    foundPromocode,
    isPromocodeApplied,
    dropAppliedCode,
    addAppliedCode,
    setInputValue,
  }
}