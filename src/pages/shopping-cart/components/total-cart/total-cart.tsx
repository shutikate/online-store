import { FC } from "react";
import {
  TotalCartContainer,
  Summary,
  DescriptionText,
  PromoInput,
  TestPromocodes,
  CodeDescription,
  PromoWrapper,
} from "./total-cart.styled";
import Button, { BUTTON_TYPE_CLASSES } from "../../../../components/buttons/buttons";
import { IPromocode } from './types';
import { usePromo } from "./use-promo";

interface TotalCartProps {
  promocodes: IPromocode[];
  totalAmount: number;
  productsAmount: number;
  onOpenPurchaseModal: () => void;
}

const TotalCart: FC<TotalCartProps> = ({
  promocodes,
  totalAmount,
  productsAmount,
  onOpenPurchaseModal
}) =>
{
  const {
    appliedCodes,
    totalAmountPromo,
    inputValue,
    foundPromocode,
    isPromocodeApplied,
    dropAppliedCode,
    addAppliedCode,
    setInputValue,
  } = usePromo(promocodes, totalAmount);
  return (
    <TotalCartContainer>
      <Summary>Summary</Summary>
      <DescriptionText><span>Products:</span>{productsAmount}</DescriptionText>
      {appliedCodes.length !== 0
      ? <DescriptionText active><span>Total:</span>{totalAmount}$</DescriptionText>
      : <DescriptionText><span>Total:</span>{totalAmount}$</DescriptionText>
      }
      {appliedCodes.length !== 0 ? <DescriptionText><span>Total:</span>{totalAmountPromo}$</DescriptionText> : null}
      {appliedCodes.map(code => <>
        <PromoWrapper>
          <CodeDescription>{code.description}</CodeDescription>
          <Button buttonType={BUTTON_TYPE_CLASSES.small} onClick={() => dropAppliedCode(code.id)}>Drop</Button>
        </PromoWrapper>
      </>)}
      <PromoInput type="text" value={inputValue} placeholder="Enter promo code" onChange={({ target }) => setInputValue(target.value)} />
      {foundPromocode &&
        <>
        <PromoWrapper>
          <CodeDescription>{foundPromocode.description}</CodeDescription>
          {!isPromocodeApplied(inputValue) && <Button buttonType={BUTTON_TYPE_CLASSES.small} onClick={() => addAppliedCode(inputValue)}>Add</Button>}
        </PromoWrapper>
        </>}
      <TestPromocodes>Promocodes for test: {promocodes.map((code, index) => `'${code.id.toUpperCase()}'${index === promocodes.length - 1 ? '' : ','} ` )}</TestPromocodes>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={onOpenPurchaseModal}>BYU NOW</Button>
    </TotalCartContainer>
  );
};

export default TotalCart;
