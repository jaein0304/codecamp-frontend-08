import * as S from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>Product List</S.Title>
        </S.TitleWrapper>
        {/* <S.BestProductWrapper>
          {props.dataUseditemsOfTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <S.BestProductBox
              key={el._id}
              onClick={props.onClickMoveToProduct(el)}
              id={el._id}
            >
              <S.BestProductPhoto
                src={
                  el?.images[0]
                    ? `https://storage.googleapis.com/${el?.images[0]}`
                    : "/images/noimage.jpg"
                }
              />
              <S.BoxBody>
                <S.BestProductName>{el.name}</S.BestProductName>
                <S.BoxFooter>
                  <S.BestProductInfo>
                    <S.BestProductSubTitle>{el.remarks}</S.BestProductSubTitle>
                    <S.BestProductPrice>
                      {el.price.toLocaleString("ko-KR")} 원
                    </S.BestProductPrice>
                  </S.BestProductInfo>
                </S.BoxFooter>
              </S.BoxBody>
            </S.BestProductBox>
          ))}
        </S.BestProductWrapper> */}
        <S.ProductSearchWrapper>
          <S.MenuWrapper>
            <S.SellProduct
              onClick={props.onClickNotSoldOutList}
              soldOut={props.soldOut}
            >
              판매중인 상품
            </S.SellProduct>
            {/* <S.SoldOutProduct
              onClick={props.onClickSoldOutList}
              soldOut={props.soldOut}
            >
              판매된 상품
            </S.SoldOutProduct> */}
          </S.MenuWrapper>
          <S.SearchWrapper>
            <S.SearchBox
              type="text"
              placeholder="제품을 검색해주세요"
              onChange={props.onChangeSearch}
            />
          </S.SearchWrapper>
        </S.ProductSearchWrapper>

        {!props.soldOut && (
          <S.ProductListWrapper>
            <div>
              <S.Infinite
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={true || false}
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((el) => (
                  <S.ProductRow
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickMoveToProduct(el)}
                  >
                    <S.Line />
                    <S.ProductWrapperBody>
                      <S.ProductInfoWrapper>
                        {/* {el?.images[0] ? (
                          <S.ProductPhoto
                            src={`https://storage.googleapis.com/${el?.images[0]}`}
                          />
                        ) : (
                          <S.ProductPhoto src={"/images/noimage.jpg"} />
                        )} */}
                        <S.ProductInfo>
                          <S.ProductTitle>상품이름 : {el.name}</S.ProductTitle>
                          <S.ProductSubTitle>
                            상품설명 : {el.remarks}
                          </S.ProductSubTitle>
                          <S.ProductTag>{el.tags}</S.ProductTag>
                          <S.ProductInfoFooter>
                            <S.ProductSellerWrapper>
                              {/* <S.ProductSellerPhoto
                                src={
                                  el?.seller.picture
                                    ? `https://storage.googleapis.com/${el?.seller.picture}`
                                    : `/images/photo.png`
                                }
                              /> */}
                              <S.ProductSeller>
                                판매자 : {el.seller?.name}
                              </S.ProductSeller>
                            </S.ProductSellerWrapper>
                          </S.ProductInfoFooter>
                        </S.ProductInfo>
                      </S.ProductInfoWrapper>
                      <S.ProductPriceWrapper>
                        {/* <S.Money src="/images/money.png" /> */}
                        <S.ProductPrice>{el.price}원</S.ProductPrice>
                      </S.ProductPriceWrapper>
                    </S.ProductWrapperBody>
                  </S.ProductRow>
                ))}
              </S.Infinite>
            </div>
          </S.ProductListWrapper>
        )}

        <S.ProductListSoldWrapper>
          {props.soldOut && (
            <div>
              {props.soldOutData?.fetchUseditems.map((el) => (
                <S.ProductRow
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickMoveToProduct(el)}
                >
                  <S.Line />
                  <S.ProductWrapperBody>
                    <S.ProductInfoWrapper>
                      {el?.images[0] ? (
                        <S.ProductPhoto
                          src={`https://storage.googleapis.com/${el?.images[0]}`}
                        />
                      ) : (
                        <S.ProductPhoto src={"/images/noimage.jpg"} />
                      )}
                      <S.ProductInfo>
                        <S.ProductTitle>{el.name}</S.ProductTitle>
                        <S.ProductSubTitle>{el.remarks}</S.ProductSubTitle>
                        <S.ProductTag>{el.tags}</S.ProductTag>
                        <S.ProductInfoFooter>
                          <S.ProductSellerWrapper>
                            <S.ProductSellerPhoto src="/images/photo.png" />
                            <S.ProductSeller>{el.seller?.name}</S.ProductSeller>
                          </S.ProductSellerWrapper>
                          <S.ProductLikeWrapper>
                            <S.ProductHeart src="/images/heart.png" />
                            <S.ProductLikeCount>
                              {el.pickedCount}
                            </S.ProductLikeCount>
                          </S.ProductLikeWrapper>
                        </S.ProductInfoFooter>
                      </S.ProductInfo>
                    </S.ProductInfoWrapper>
                    <S.ProductPriceWrapper>
                      <S.Money src="/images/money.png" />
                      <S.ProductPrice>{el.price}</S.ProductPrice>
                    </S.ProductPriceWrapper>
                  </S.ProductWrapperBody>
                </S.ProductRow>
              ))}
            </div>
          )}
        </S.ProductListSoldWrapper>

        <S.ButtonWrapper>
          <div />
          {/* <CommonButton */}
          {/* onClick={props.onClickMoveToMarketWrite}
            name="상품 등록하기"
          /> */}
        </S.ButtonWrapper>
      </S.Wrapper>
      {/* <RecentWatchBox /> */}
    </>
  );
}
