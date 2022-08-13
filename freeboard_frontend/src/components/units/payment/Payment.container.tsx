import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import PaymentUI from "./Payment.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./Payment.queries";

declare const window: typeof globalThis & {
  IMP: any;
};
// https://github.com/iamport/iamport-react-example/blob/master/manuals/PAYMENT.md
export default function Payment() {
  const [myPoint, setMyPoint] = useState();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  function onChangeMyPoint(event) {
    setMyPoint(event.target.value);
  }
  function onClickPayment() {
    if (myPoint === "" || isNaN(myPoint) === true) {
      alert("포인트를 입력해주세요");
      return;
    }
    if (myPoint < 100) {
      alert("100원 이상 결제 해주세요");
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp65274708");
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: `${myPoint} 포인트`,
        amount: myPoint,
        m_redirect_url: "http://localhost:3000/payment",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp);
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert(`포인트 ${myPoint} 가 충전되었습니다!`);
          location.reload();
          // 결제 성공 시 로직,
          // ...
        } else {
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PaymentUI
        onChangeMyPoint={onChangeMyPoint}
        onClickPayment={onClickPayment}
      />
    </>
  );
}
