import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RecentWatchBox() {
  const [basketItems, setBasketItmes] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);

  const MyBox = styled.div`
    width: 196px;
    position: sticky;
    left: 85%;
    bottom: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  `;
  const Title = styled.div`
    font-weight: bold;
    font-size: 25px;
    line-height: 27px;
    margin-top: 20px;
  `;
  const RecentBox = styled.div`
    width: 156px;
    height: 199px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
    :hover {
      background-color: orange;
    }
    cursor: pointer;
    margin-bottom: 20px;
  `;
  const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  `;

  const Heart = styled.img`
    width: 15px;
    height: 14px;
    margin-right: 5px;
  `;

  const LikeCount = styled.div`
    margin-right: 10px;
  `;

  const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Photo = styled.img`
    width: 60px;
    height: 60px;
    background-color: gray;
  `;
  const Name = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
  `;
  const Remarks = styled.div`
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    margin-left: 10px;
  `;
  const Price = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
    margin-left: 10px;
  `;
  const Tag = styled.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    margin-top: 8px;
    margin-left: 10px;
    display: position;
    position: absolute;
    transform: translate(0%, 1000%);
  `;

  function onClickMoveToProduct(event) {}
  return (
    <MyBox>
      <Title>오늘 본 상품</Title>
      {basketItems?.map((el: any) => (
        <RecentBox key={el._id} id={el._id} onClick={onClickMoveToProduct}>
          {/* <ProductWrapper>
            {el.images[0] ? (
              <Photo src={`https://storage.googleapis.com/${el?.images[0]}`} />
            ) : (
              <Photo src={"/images/noimage.jpg"} />
            )}
          </ProductWrapper> */}
          <Name> 상품명 : {el.name}</Name>
          <Remarks>상품설명 : {el.remarks}</Remarks>
          <Price>가격 : {el.price.toLocaleString("ko-KR")}</Price>
          <Tag>#{el.tags}</Tag>
        </RecentBox>
      ))}
    </MyBox>
  );
}
