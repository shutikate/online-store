import { useForm, Controller } from "react-hook-form";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button, { BUTTON_TYPE_CLASSES } from "../../../../components/buttons/buttons";
import {
  Form,
  Details,
  Input,
  ValidCvvWrapper,
  Wrapper,
  ErrorText,
  CardText
} from './purchase.styled';

interface PurchaseProps {
  onConfirm: () => void;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
  email: string;
  cardNumber: string;
  valid: string;
  cvv: string;
}

const ERRORS = {
  name: "Name and surname should consist of at least 2 words every minimum 3 symbols",
  phone: "Should start from + and consist of at least 9 numbers",
  address: "Should consist of at least 3 words every minimum 5 symbols",
  cardNumber: "Should consist of 16 numbers",
  valid: "Valid date should consist of month and year",
  cvv: "CVV code should consist of 3 numbers",
}

const schema = yup.object({
  name: yup.string().required().test(
    "name",
    ERRORS.name,
    (value = "") => {
      const nameSurname = value.split(" ");
      return nameSurname.length >= 2 && nameSurname.every(item => item.length >= 3);
    }
  ),
  phone: yup.string().required().min(10, ERRORS.phone).test(
    "phone",
    ERRORS.phone,
    (value = "") => {
      return value[0] === "+" && /^\d+$/.test(value.slice(1));
    }
  ),
  address: yup.string().required().test(
    "address",
    ERRORS.address,
    (value = "") => {
      const addressWords = value.split(" ");
      return addressWords.length >= 3 && addressWords.every(item => item.length >= 5);
    }
  ),
  email: yup.string().required().email(),
  cardNumber: yup.string().required().length(16, ERRORS.cardNumber).test(
    "cardNumber",
    ERRORS.cardNumber,
    (value = "") => {
      return /^\d+$/.test(value);
    }
  ),
  valid: yup.string().required().length(5, ERRORS.valid).test(
    "valid",
    ERRORS.valid,
    (value = "") => {
      const [ month ] = value.split("/");
      return Number(month) <= 12;
    }
  ),
  cvv: yup.string().required().length(3, ERRORS.cvv).test(
    "cvv",
    ERRORS.cvv,
    (value = "") => {
      return /^\d+$/.test(value);
    }
  ),
});

const Purchase: FC<PurchaseProps> = ({ onConfirm }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      email: '',
      cardNumber: '',
      valid: '',
      cvv: '',
    }
  });

  const onSubmit = handleSubmit(onConfirm);

  return (
    <Form onSubmit={onSubmit}>
      <Details>Personal details</Details>
      <Input
        placeholder="First and Last Name"
        {...register("name", { required: true })}
        aria-invalid={errors.name?.message ? "true" : "false"}
      />
      <ErrorText>{errors.name?.message}</ErrorText>
      <Input
        placeholder="Phone number"
        {...register("phone")}
        aria-invalid={errors.phone?.message ? "true" : "false"}
      />
      <ErrorText>{errors.phone?.message}</ErrorText>
      <Input
        placeholder="Delivery address"
        {...register("address")}
        aria-invalid={errors.address?.message ? "true" : "false"}
      />
      <ErrorText>{errors.address?.message}</ErrorText>
      <Input
        placeholder="Email"
        {...register("email")}
        aria-invalid={errors.email?.message ? "true" : "false"}
      />
      <ErrorText>{errors.email?.message}</ErrorText>
      <Details>Credit card details</Details>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <>
            <CardText>{field.value[0] === '4' ? 'Visa' : field.value[0] === '5' ? 'MasterCard' : field.value[0] === '6' ? 'Discover Cards' : null}</CardText>
            <Input
              {...field}
              placeholder="Card number"
              onChange={(e) => e.target.value.length <= 16 && (/^\d+$/.test(e.target.value) || e.target.value.length === 0) && field.onChange(e.target.value)}
              aria-invalid={errors.cardNumber?.message ? "true" : "false"}
            />
          </>
        )}
      />
      <ErrorText>{errors.cardNumber?.message}</ErrorText>
      <ValidCvvWrapper>
        <Wrapper>
          <Controller
            control={control}
            name="valid"
            render={({ field }) => (
              <Input
              {...field}
              placeholder="Valid"
              onChange={(e) => {
                  if (e.target.value.length <= 5) {
                    if (e.target.value.length === 2 && field.value.length < 3) {
                      return field.onChange(e.target.value + "/");
                    } else if (e.target.value.length === 3 && field.value.length > 3) {
                      return field.onChange(e.target.value.slice(0, 2));
                    } else if (e.target.value.length === 3 && field.value.length === 2) {
                      return field.onChange(e.target.value.slice(0, 2) + "/" + e.target.value[2]);
                    } else if (/^\d+$/.test(e.target.value[e.target.value.length - 1]) || e.target.value.length === 0) {
                      return field.onChange(e.target.value);
                    }
                  }
                }
              }
              aria-invalid={errors.valid?.message ? "true" : "false"}
              />
            )}
          />
          <ErrorText>{errors.valid?.message}</ErrorText>
        </Wrapper>
        <Wrapper>
          <Controller
            control={control}
            name="cvv"
            render={({ field }) => (
                <Input
                  {...field}
                  placeholder="CVV"
                  onChange={(e) => e.target.value.length <= 3 && (/^\d+$/.test(e.target.value) || e.target.value.length === 0) && field.onChange(e.target.value)}
                />
              )}
          />
          <ErrorText>{errors.cvv?.message}</ErrorText>
        </Wrapper>
      </ValidCvvWrapper>
      <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Confirm</Button>
    </Form>
  );
};

export default Purchase;
