import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAmericas,
    faCircleInfo,
    faKeyboard,
    faPaperPlane,
    faArrowRightFromBracket,
    faUser,
    faTicket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'react-tippy/dist/tippy.css';

import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Tiếng Anh',
                    },
                    {
                        type: 'language',
                        code: 'jp',
                        title: '日本',
                    },
                ],
            },
        },
        { icon: <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>, title: 'Feedback and help', to: 'feedback' },
        { icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>, title: 'Keyboard shortcut' },
    ];
    const LOGIN_ITEMS = [
        { icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>, title: 'View profile' },
        { icon: <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>, title: 'Get coins' },
        { icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>, title: 'Settings' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>, title: 'Log out' },
    ];
    const currentUser = true;

    const handleMenuItem = (item) => {
        console.log(item);
        switch (item.type) {
            case 'language':
                // handle fn
                break;
            default:
            // else
        }
    };

    return (
        <header>
            <div className={cx('inner')}>
                <div className={cx('header-box')}>
                    <h1 className={cx('header-logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </h1>
                    <Search></Search>
                    <div className={cx('header-option')}>
                        <Button iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>Upload</Button>
                        {currentUser ? (
                            <>
                                <Tippy content="Messages" placement="bottom">
                                    <div>
                                        <FontAwesomeIcon
                                            className={cx('header-mess')}
                                            icon={faPaperPlane}
                                        ></FontAwesomeIcon>
                                    </div>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary className={cx('button-cus')}>
                                    Login
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? LOGIN_ITEMS : MENU_ITEMS} onChange={handleMenuItem}>
                            {currentUser ? (
                                <div className={cx('header-user')}>
                                    <img
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1652244201267202.jpeg?x-expires=1661310000&x-signature=lWV4nkWG7RLqyE8W7KF6PTFylNM%3D"
                                        alt="user"
                                    />
                                </div>
                            ) : (
                                <div className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                </div>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
