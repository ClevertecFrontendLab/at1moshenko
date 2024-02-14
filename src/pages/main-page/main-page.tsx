import 'antd/dist/antd.css';
import './main-page.css';

import { MainLayout } from '@components/layout/layout';

export const MainPage: React.FC = () => {
    return (
        <div className='mainContainer'>
            <MainLayout />
        </div>
    );
};
