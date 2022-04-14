import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Script from "next/script";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreatePointPaymentArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import useFetchUser from "../../commons/hooks/useFetchUser";
import { Logo } from "../../commons/layout/header/header.styles";
import * as S from "./paymentpoint.styles";


const CREATE_POINT_PAYMENT = gql`
  mutation createPointPayment($impUid: String!, $amount: Float!) {
    createPointPayment(impUid: $impUid, amount: $amount) {
      id
      impUid
      amount
      status
    }
  }
`;

interface IPropsPaymentpoint {
  data?: Pick<IQuery, "fetchUser">;
  onClickPointModal?: () => void
}



export default function PaymentpointUI(props: IPropsPaymentpoint) {
  const router = useRouter()
  const { data } = useFetchUser();
  const [createPointPayment] = useMutation<
    Pick<IMutation, "createPointPayment">,
    IMutationCreatePointPaymentArgs
  >(CREATE_POINT_PAYMENT);
  const [amount, setAmount] = useState(100);
  const selectChargePoint = (e: ChangeEvent<HTMLSelectElement>) => {
    setAmount(Number(e.target.value));
  };
  const onClickPayment = () => {
      const { IMP }: any = window; // 생략 가능
      IMP.init("imp17660255");   // IMP 아이디 백엔드랑 다르면 에러남.
      IMP.request_pay(
        {
          // param
          pg: "html5_inicis",
          pay_method: "card",
          // merchant_uid: "ORD20180131-0000011",
          name: "챌린저스 포인트",
          amount: amount,
          buyer_email: props?.data?.fetchUser?.email,
          buyer_name: props?.data?.fetchUser?.name,
          // m_redirect_url: 모바일 결제시 돌아갈 주소!!
        },
        async function (rsp: any) {
          if (rsp.success) {
            try {
              await createPointPayment({
                variables: {
                  impUid: rsp.imp_uid,
                  amount: rsp.paid_amount,
                },
              });
              alert("포인트가 충전되었습니다.");
              router.push('/')
            } catch (error) {
              console.log(error);
            }
          } else {
            alert("포인트 충전에 실패하였습니다.");
          }
        }
      );
  
  };

  return (
    <>
    <Script src="https://code.jquery.com/jquery-1.12.4.min.js" />
    <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" />
    <S.PaymentBox>
    <S.PaymentWrapper>
      <div>
        <Logo className="pay__logo">
          <img src="/img/commons/logo.svg" alt="logo" />
        </Logo>
        <h2>챌린저스 포인트 충전하기</h2>
        <select onChange={selectChargePoint} defaultValue="충전 잔액 선택">
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="10000">10000</option>
          <option value="30000">30000</option>
        </select>
        <ul>
          <li>현재 포인트 : <span className="point">{data?.fetchUser?.point}</span></li>
          <li>충전 후 포인트 : <span className="point">{
          data?.fetchUser?.point &&
          data?.fetchUser?.point >= 0 &&
          Number(data?.fetchUser?.point) + amount}
          </span>
          </li>
        </ul>
        <div>
          <button onClick={onClickPayment}>충전하기</button>
        </div>
      </div>
      <div className="payment__back"></div>
    </S.PaymentWrapper>
    </S.PaymentBox>
    </>
  );
}

