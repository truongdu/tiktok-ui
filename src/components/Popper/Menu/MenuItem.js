import Button from '../../Button';
function MenuItems({ data, className }) {
    return data.map((item, index) => {
        return (
            <Button className={className} key={index} iconLeft={item.icon} outline="fale" to={item.to}>
                {item.title}
            </Button>
        );
    });
}

export default MenuItems;
