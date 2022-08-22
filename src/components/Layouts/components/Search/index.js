import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadLess from '@tippyjs/react/headless';
import 'react-tippy/dist/tippy.css';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const handleHideResult = () => {
        setShowResult(false);
        setSearchValue('');
    };
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [searchValue]);
    console.log(loading);
    return (
        <TippyHeadLess
            interactive
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('header-search-box')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('header-search-tt')}>Search result</h4>
                        <p>{searchValue}</p>

                        <h4 className={cx('header-search-tt')}>Account</h4>
                        {searchResult.map((rusult) => (
                            <AccountItem key={rusult.id} data={rusult}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('header-search')}>
                <input
                    ref={inputRef}
                    type="text"
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                />
                {!loading && searchValue && (
                    <button className={cx('search-ic', 'clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('search-ic', 'loading')}></FontAwesomeIcon>}
                <button className={cx('search-ic', 'btn')}>
                    <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </span>
                </button>
            </div>
        </TippyHeadLess>
    );
}

export default Search;
