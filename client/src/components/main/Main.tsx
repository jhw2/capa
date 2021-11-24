import React, { useEffect, useState, useCallback } from "react";
import { CardList } from "../../types/CardType";
import capaApiService from "../../service/CapaApiService";
import CardLists from "./sections/CardLists";
import SearchArea from "./sections/SearchArea";


const Main: React.FC = () => {
  const [cardList, setCardList] = useState<Array<CardList>>([]);

  const callList = useCallback(async (params = {}) => {
    const {data} = await capaApiService.getCardList(params);
    setCardList(data);
  },[]);

  useEffect(() => {
    callList();
  }, [callList]);

  return (
    <>
      <h5 className="page-title">들어온 요청</h5>
      <h6 className="sub-title">파트너님에게 딱 맞는 요청서를 찾아보세요.</h6>

      <SearchArea callList={callList} />

      <CardLists cardList={cardList} /> 
    </>
  );
};

export default Main;
