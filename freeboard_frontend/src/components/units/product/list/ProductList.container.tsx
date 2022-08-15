import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListUI from "./ProductList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./ProductList.queries";

export default function ProductList() {
  const router = useRouter();
  const [soldOut, setSoldOut] = useState(false);

  const [myKeyword, setMyKeyword] = useState("");
  const [mySearch, setMySearch] = useState("");

  const { data: dataUseditemsOfTheBest } = useQuery(
    FETCH_USEDITEMS_OF_THE_BEST
  );

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: false },
    fetchPolicy: "network-only", // 서버 데이터만 사용, 항상 최신 데이터를 다룬다
  });

  const { data: soldOutData } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: true },
  });

  function onChangeSearch(event) {
    setMySearch(event.target.value);
  }

  function onClickSearch() {
    refetch({ search: myKeyword });
    setMyKeyword(mySearch);
  }

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        // boardId: String(router.query.number),
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  const onClickMoveToProduct = (el) => (event) => {
    router.push(`products/${event.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      return;
    }

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    if (baskets.length > 3) {
      baskets.shift();
    }

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  function onClickMoveToMarketWrite() {
    router.push("/market/market-write");
  }

  function onClickSoldOutList() {
    setSoldOut(true);
  }
  function onClickNotSoldOutList() {
    setSoldOut(false);
  }
  return (
    <ProductListUI
      data={data}
      dataUseditemsOfTheBest={dataUseditemsOfTheBest}
      onClickMoveToProduct={onClickMoveToProduct}
      onClickMoveToMarketWrite={onClickMoveToMarketWrite}
      soldOutData={soldOutData}
      soldOut={soldOut}
      onChangeSearch={onChangeSearch}
      onClickSoldOutList={onClickSoldOutList}
      onClickNotSoldOutList={onClickNotSoldOutList}
      onLoadMore={onLoadMore}
      onClickSearch={onClickSearch}
    />
  );
}
