import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  width: 1920px;
  padding-top: 80px;
  padding-bottom: 405px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-style: "normal";
  font-size: 100px;
  text-align: center;
  font-weight: bold;
`;
export const BestProductWrapper = styled.div`
  width: 1200px;
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestProductBox = styled.div`
  width: 282px;
  height: 391px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer;
  :hover {
    background-color: #ff7f00;
  }
`;
export const BestProductPhoto = styled.img`
  width: 242px;
  height: 242px;
`;

export const BoxBody = styled.div``;
export const BestProductName = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 27px;
  color: #000000;
  margin-top: 20px;
`;
export const BoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const BestProductInfo = styled.div``;
export const BestProductSubTitle = styled.div`
  font-size: 12px;
`;
export const BestProductPrice = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;
export const BestProductLikeWrapper = styled.div``;
export const ProductHeart = styled.img`
  width: 20px;
  height: 19px;
`;
export const BestProductLikeCount = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  text-align: center;
`;
export const ProductSearchWrapper = styled.div`
  margin-top: 80px;
  width: 1200px;
  border-radius: 20px;
  /* border: 5px solid #ff7f00; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellProduct = styled.div<{ soldOut: boolean }>`
  font-weight: ${(props) => (props.soldOut === true ? "normal" : 800)};
  font-size: ${(props) => (props.soldOut === true ? "18px" : "25px")};
  color: ${(props) => (props.soldOut === true ? "#4f4f4f" : "#ff7f00")};

  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
`;
export const SoldOutProduct = styled.div<{ soldOut: boolean }>`
  font-weight: ${(props) => (props.soldOut === true ? 800 : "normal")};
  font-size: ${(props) => (props.soldOut === true ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.soldOut === true ? "#ff7f00" : "#4f4f4f")};
  cursor: pointer;
`;
export const SearchWrapper = styled.div`
  display: flex;
`;
export const SearchBox = styled.input`
  /* width: 282px; */
  width: 564px;
  height: 52px;
  background: #f2f2f2;
  border: none;

  padding-left: 20px;
  margin-right: 20px;
`;
export const SearchDate = styled.input`
  width: 282px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;

  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  padding-left: 20px;
  margin-left: 24px;
`;
export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-left: 24px;
`;
export const ProductListWrapper = styled.div`
  margin-top: 40px;
  width: 50%;
  height: 1000px;
  overflow: auto;
`;

export const ProductListSoldWrapper = styled.div`
  margin-top: 40px;
`;

export const Infinite = styled(InfiniteScroll)``;

export const ProductRow = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  cursor: pointer;
`;
export const Line = styled.hr`
  width: 100%;
  height: 1px;

  background-color: #4f4f4f;
`;

export const ProductWrapperBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  justify-content: space-between;
`;
export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProductPhoto = styled.img`
  width: 160px;
  height: 160px;
`;
export const ProductInfo = styled.div`
  margin-left: 40px;
  margin-top: 8px;
`;
export const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
`;
export const ProductSubTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #4f4f4f;
`;
export const ProductTag = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #bdbdbd;

  margin-top: 8px;
`;
export const ProductInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;
export const ProductSellerPhoto = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ProductSellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductSeller = styled.div`
  font-weight: 500;
  /* font-size: 16px; */
  line-height: 24px;
  text-align: right;

  color: #4f4f4f;
  margin-left: 6px;
  margin-bottom: 3px;
`;

export const ProductLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
export const ProductLikeCount = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-left: 6px;
  margin-bottom: 3px;
  color: #4f4f4f;
`;
export const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 20px;
`;
export const Money = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #000000;
`;
export const ButtonWrapper = styled.div`
  width: 1200px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;
export const MarginLeft = styled.div`
  margin-left: 30px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
