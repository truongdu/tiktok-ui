import Header from '../components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header></Header>
            <div id="main">
                <div className="inner">
                    <div className={cx('main-layout')}>
                        <div className={cx('sidebar')}>
                            <Sidebar></Sidebar>
                        </div>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
