import React from 'react';
import { Layout } from 'antd';

import styles from './layout.module.css';
import { Sidebar } from '@components/sider/sider';

import { HeaderCustom } from '@components/header/header';
import { ContentCustom } from '@components/content/content';

export const MainLayout: React.FC = () => {
    return (
        <>
            <Layout className={styles.main}>
                <Sidebar />
                <Layout className={styles.site_layout}>
                    <HeaderCustom />
                    <ContentCustom />
                </Layout>
            </Layout>
        </>
    );
};
