import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fc6b354591c8d0e52298cb865f15be01~c5_300x300.webp?x-expires=1660964400&x-signature=K%2BGE1YFRuKjooKmLlUHHRw%2F5w1g%3D"
                alt="Name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>truongdu.td88</span>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <p className={cx('last-name')}>DuPX</p>
            </div>
        </div>
    );
}

export default AccountItem;
