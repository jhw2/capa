import React, {memo} from "react";
import { CardList } from "../../../types/CardType";


interface ICardLists {
  cardList: CardList[]
}
const CardLists: React.FC<ICardLists> = memo(({ cardList }) => {
  return (
    <>
      <ul className="card-list">
        {cardList.map((card: CardList) => {
          const { id,title,client, due,count,amount,method, material,status} = card;
          const consultingTag =
            status === "상담중" ? <span className="consulting">상담중</span> : "";
          const methodTxt = method?.join(", ");
          const materialTxt = material?.join(", ");
          return (
            <li key={id}>
              {consultingTag}
              <div className="top">
                <h6>{title}</h6>
                <p>{client}</p>
                <span className="due">{due}까지 납기</span>
              </div>
              <ul className="mid">
                <li>
                  <span>도면개수</span>
                  <strong>{count}개</strong>
                </li>
                <li>
                  <span>총 수량</span>
                  <strong>{amount}개</strong>
                </li>
                <li>
                  <span>가공방식</span>
                  <strong>{methodTxt}</strong>
                </li>
                <li>
                  <span>재료</span>
                  <strong>{materialTxt}</strong>
                </li>
              </ul>
              <div className="bottom">
                <input
                  type="button"
                  value="요청 내역 보기"
                  className="btn blue"
                />
                <input type="button" value="채팅하기" className="btn" />
              </div>
            </li>
          );
        })}
      </ul>
      
      {(()=>{
        if(cardList.length === 0){
          return <div className='no-data'>조건에 맞는 견적 요청이 없습니다.</div>
        }
      })()}
    </>
  );
});

export default CardLists;
