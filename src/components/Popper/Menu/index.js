import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive
            delay={[0, 2000]}
            placement="top-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('popper-option')}>
                        <MenuItems data={items} className={cx('option-btn')}></MenuItems>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
