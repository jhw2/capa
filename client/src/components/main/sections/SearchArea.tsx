import React, { useState, memo, useCallback } from "react";
import { CardParams } from "../../../types/CardType";
import CustomSelect from "./CustomSelect";
import ToggleCheck from "./ToggleCheck";

interface ISearchArea {
    callList:  (param: CardParams) => void
}
const SearchArea: React.FC<ISearchArea> = memo(({ callList }) => {
    const [countMethod, setCountMethod] = useState<number>(0);
    const [countMaterial, setCountMaterial] = useState<number>(0);

    //검색 조건 변경
    const changeSearchParams = useCallback((e: React.ChangeEvent<HTMLInputElement>): void =>{
        const formData = new FormData(document.querySelector("form.search-area") as HTMLFormElement);
        setCountMethod(formData.getAll('method_like').length);
        setCountMaterial(formData.getAll('material_like').length);
        formData.set('method_like', formData.getAll('method_like').join(','));
        formData.set('material_like', formData.getAll('material_like').join(','));

        const params: CardParams = {};
        formData.forEach((value, key) => params[key] = value.toString());
        callList(params);
    },[callList]);

    //필터 리셋
    const resetFillter = useCallback(() : void =>{
        document.querySelectorAll(`form.search-area .left input:checked`).forEach((e: any): void=>{ e.checked = false; })
        setCountMethod(0);
        setCountMaterial(0);

        const formData = new FormData(document.querySelector("form.search-area") as HTMLFormElement);
        const params: CardParams = {};
        formData.forEach((value, key) => params[key] = value.toString());
        callList(params);
    },[callList]);

    return (
        <form className="search-area" method='get'>
            <div className="left">
                <CustomSelect title='가공방식' checkList={['밀링','선반']} name='method_like' checkCount={countMethod} changeSearchParams={changeSearchParams} />
                <CustomSelect title='재료' checkList={['알루미늄','탄소강','구리','합금강','강철']} name='material_like' checkCount={countMaterial} changeSearchParams={changeSearchParams} />
                {countMethod > 0 || countMaterial > 0 ? <input type='reset' value='필터링 리셋' onClick={resetFillter} /> : ''}
            </div>
            <div className="right">
                <ToggleCheck changeSearchParams={changeSearchParams} />
            </div>
        </form>
    );
});
export default SearchArea;
