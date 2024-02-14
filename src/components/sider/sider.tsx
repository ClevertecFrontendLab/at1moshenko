import React, { useState } from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import {
    TrophyFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import icon_exit from '../../../public/Exit.png';
import styles from './sider.module.css';

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint='sm'
            collapsedWidth={isMobile ? 0 : 80}
            onBreakpoint={(broken) => setIsMobile(broken)}
            width={isMobile ? 106 : 208}
            theme='light'
            className={styles.sider}
        >
            <div className={`${collapsed ? styles.mini_logo : styles.big_logo}`} />
            <Menu
                className={styles.menu_icon}
                mode={isMobile ? 'vertical' : 'inline'}
                items={[
                    {
                        key: '1',
                        icon: (
                            <CalendarTwoTone
                                twoToneColor={['#061178', '#061178']}
                                className={styles.icon_color}
                            />
                        ),
                        label: 'Календарь',
                    },
                    {
                        key: '2',
                        icon: <HeartFilled className={styles.icon_color} />,
                        label: 'Тренировки',
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled className={styles.icon_color} />,
                        label: 'Достижения',
                    },
                    {
                        key: '4',
                        icon: <IdcardOutlined className={styles.icon_color} />,
                        label: 'Профиль',
                    },
                ]}
            />
            <Button
                type='ghost'
                className={`${collapsed ? styles.icon_exit_closed : styles.icon_exit_open}`}
            >
                <img className={styles.icon_exit} src={icon_exit} alt='btn_menu' />
                {`${collapsed ? '' : 'Выход'}`}
            </Button>

            <Space
                className={styles.sidebar__trigger}
                data-test-id={`sider-switch${isMobile ? '-mobile' : ''}`}
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Space>
        </Sider>
    );
};
