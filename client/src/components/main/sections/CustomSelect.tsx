import React, { useEffect, useState, memo, useRef } from "react";

interface ICustomSelect {
    title: string,
    checkList: string[],
    name: string,
    checkCount: number,
    changeSearchParams:  (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomSelect: React.FC<ICustomSelect> = memo(({ title, checkList, name, checkCount, changeSearchParams }) => {
    const [isSelectOpen, setSelectON] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLUListElement>(null); 

    const openOptions = () : void =>{
        setSelectON(!isSelectOpen);
    }

    useEffect(() => {
        const pageClickEvent = (e: any) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setSelectON(false);
            }
        };
        if (isSelectOpen) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
      }, [isSelectOpen])

    return (
    <div className={checkCount > 0 ? 'custom-select checked' : 'custom-select'}>
        <strong onClick={openOptions}>{title}{checkCount > 0 ? `(${checkCount})` : ''}</strong>
        <ul ref={dropdownRef} className={isSelectOpen ? 'open' : ''}>
            {checkList.map((value)=>{
                return (
                    <li key={name+value}>
                        <label>
                            <input type="checkbox" value={value} name={name} onChange={changeSearchParams} />
                            {value}
                        </label>
                    </li>
                )
            })}
        </ul>
        <span className='arrow' onClick={openOptions}></span>
    </div>
    );
});
export default CustomSelect;
