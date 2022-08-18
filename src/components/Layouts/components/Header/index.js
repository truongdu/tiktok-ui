import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';
import styles from './Header.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([1]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header>
            <div className={cx('inner')}>
                <div className={cx('header-box')}>
                    <h1 className={cx('header-logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </h1>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('header-search-box')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('header-search-tt')}>search result</h4>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                    <AccountItem></AccountItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('header-search')}>
                            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                            <button className={cx('search-ic', 'clear')}>
                                <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                            </button>
                            <FontAwesomeIcon icon={faSpinner} className={cx('search-ic', 'loading')}></FontAwesomeIcon>

                            <button className={cx('search-ic', 'btn')}>
                                <span>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </span>
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx('header-login')}>
                        <button className={cx('upload')}>Upload</button>
                        <button className={cx('user')}>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
