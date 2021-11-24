import React, { memo } from "react";

interface IToggleCheck {
    changeSearchParams:  (e: React.ChangeEvent<HTMLInputElement>) => void
}
const ToggleCheck: React.FC<IToggleCheck> = memo(({ changeSearchParams }) => {
    return (
        <div className="toggle-check">
            <input type="checkbox" id='toggle-ck' name='status' value='상담중'  onChange={changeSearchParams} />
            <label htmlFor='toggle-ck'>토글</label>
            <span>상담중인 요청만 보기</span>
        </div>
    );
});
export default ToggleCheck;
