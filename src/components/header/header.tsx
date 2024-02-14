import React from 'react';
import { Layout, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './header.module.css';

const { Header } = Layout;

export const HeaderCustom: React.FC = () => {
    return (
        <Header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.leftContent}>
                    <p className={styles.gotToHome}>Главная</p>
                    <h1 className={styles.title}>
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </h1>
                </div>
                <Button className={styles.btnSetting}>
                    <p className={styles.wrap_icon}>
                        <SettingOutlined className={styles.icon_setting_none} />
                    </p>
                    <p className={styles.text_setting}>Настройки</p>
                </Button>
            </div>
        </Header>
    );
};
