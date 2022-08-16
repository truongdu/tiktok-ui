import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header></Header>
            <div className="main">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
