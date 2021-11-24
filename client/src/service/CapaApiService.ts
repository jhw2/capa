import http from "./http-common";
import { CardList,  CardParams } from '../types/CardType';

class CapaApiService {
  getCardList(params: CardParams) { 
    return http.get<Array<CardList>>(`/requests`, {params});
  }
}
export default new CapaApiService();