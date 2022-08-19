import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data, className, onClick }) {
    return (
        <Button className={cx('option-btn')} iconLeft={data.icon} outline="fale" to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
