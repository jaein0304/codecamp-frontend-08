import Head from "next/head";
import { Router, useRouter } from "next/router";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LoadingPage() {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onClickPayment = (data) => {
    const router = useRouter();
    console.log(data.myAmount);
    const IMP = window.IMP;
    IMP.init("imp65274708");
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: data.myAmount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz06/payment/loading",
      },

      (rsp: any) => {
        if (rsp.success) {
          console.log(rsp);
          router.push("./complete");
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };
  return (
    <div>
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
      <form onSubmit={handleSubmit(onClickPayment)}>
        <input {...register("myAmount")} type="radio" value={500} />
        500
        <input {...register("myAmount")} type="radio" value={1000} />
        1000
        <input {...register("myAmount")} type="radio" value={2000} />
        2000
        <input {...register("myAmount")} type="radio" value={5000} />
        5000
        <button>결제하기</button>
      </form>
    </div>
  );
}
