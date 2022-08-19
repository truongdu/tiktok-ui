import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAmericas,
    faCircleInfo,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import Button from '../../../Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../Popper/AccountItem';
import Menu from '../../../Popper/Menu';

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

    const [searchKey, setSearchKey] = useState();
    const searchClick = (e) => {
        setSearchKey(e.target.value);
    };

    const MENU_ITEMS = [
        { icon: <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>, title: 'English' },
        { icon: <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>, title: 'Feedback and help', to: 'feedback' },
        { icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>, title: 'Keyboard shortcut' },
    ];

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
                                    <h4 className={cx('header-search-tt')}>Search result</h4>
                                    <p>{searchKey}</p>

                                    <h4 className={cx('header-search-tt')}>User</h4>
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
                            <input
                                type="text"
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                                onChange={searchClick}
                            />
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
                    <div className={cx('header-option')}>
                        <Button iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>Upload</Button>
                        <Button primary className={cx('button-cus')}>
                            Login
                        </Button>

                        <Menu items={MENU_ITEMS}>
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
