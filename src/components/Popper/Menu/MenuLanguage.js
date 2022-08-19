import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuLanguage({ onBack, children }) {
    return (
        <div className={cx('menu-language')}>
            <button className={cx('menu-icon')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className={cx('menu-title')}>{children}</h4>
        </div>
    );
}
export default MenuLanguage;
