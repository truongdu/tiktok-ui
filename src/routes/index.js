import { LadingPageLayout } from '../components/Layouts';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

const publicRouter = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: LadingPageLayout },
    { path: '/search', component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
