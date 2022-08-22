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

  const onChangeMyPoint = (event) => {
    setMyPoint(event.target.value);
  };
  const onClickPayment = () => {
    if (myPoint === "" || isNaN(myPoint) === true) {
      alert("포인트를 입력해주세요");
      return;
    }
    if (myPoint < 100) {
      alert("100원 이상 결제 해주세요");
      return;
    }

    const IMP = window.IMP;
    IMP.init("imp49910675"); // // IMP.init(“imp49910675”)
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: `${myPoint} 포인트`,
        amount: myPoint,
        // buyer_email: "ddc0406@naver.com",
        buyer_name: "정재인",
        buyer_tel: "010-4592-3927",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/payment",
        m_redirect_url: "http://localhost:3000/",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 결제 데이터 넘기기
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          console.log(result);
          pointCharge(rsp);
          alert(`포인트 ${myPoint} 가 충전되었습니다!`);
          // location.reload();
        } else {
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  const pointCharge = async (rsp) => {
    // try {
    //   const aaa = await createPointTransactionOfLoading({
    //     variables: {
    //       impUid: rsp.imp_uid,
    //     },
    //   });
    //   console.log(aaa);
    // } catch (error) {
    //   alert(error.message);
    // }
    console.log(rsp);
  };
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
      <select onChange={onChangeMyPoint}>
        <option value={100}>100</option>
        <option value={500}>500</option>
        <option value={2000}>2,000</option>
        <option value={5000}>5,000</option>
      </select>
      <PaymentUI
        onChangeMyPoint={onChangeMyPoint}
        onClickPayment={onClickPayment}
      />
    </>
  );
}
