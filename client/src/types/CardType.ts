export type Status = '상담중' | '대기중';
export type Method = '밀링' | '선반';
export type Material = '알루미늄' | '탄소강' | '구리' | '합금강' | '강철';

export interface CardList {
    id: number,
    title: string,
    client: string,
    due: string,
    count: number,
    amount: number,
    method: Method[],
    material: Material[],
    status: Status
}

export interface CardParams {
  [index: string]: string | undefined,
  method_like?: string,
  material_like?: string,
  status?: string
}