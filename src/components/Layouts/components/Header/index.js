import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('header-box')}>
                    <h1 className={cx('header-logo')}>
                        <img src={images.logo} alt="tiktok" />
                    </h1>
                    <div className={cx('header-search')}>
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('header-search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <button className={cx('header-search-btn')}></button>
                    </div>
                    <div className={cx('header-login')}>
                        <button>Upload</button>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
