import React from 'react';
import { Layout, Button, Card } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    AndroidFilled,
    AppleFilled,
} from '@ant-design/icons';

import styles from './content.module.css';

const { Content } = Layout;

export const ContentCustom: React.FC = () => {
    return (
        <Content className={styles.content}>
            <Card className={styles.card_description}>
                <p>
                    С CleverFit ты сможешь:
                    <br />
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    <br />— отслеживать свои достижения в разделе статистики, сравнивая свои
                    результаты <br />с нормами и рекордами;
                    <br />— создавать свой профиль, где ты можешь загружать свои фото, видео и
                    отзывы <br />о тренировках;
                    <br />— выполнять расписанные тренировки для разных частей тела, следуя
                    подробным инструкциям и советам профессиональных тренеров.
                </p>
            </Card>
            <Card className={styles.card_title}>
                <p>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </p>
            </Card>
            <div className={styles.wrapper_mini_card}>
                <Card size='small' className={styles.mini_card} title='Расписать тренировки'>
                    <p>
                        <HeartFilled className={styles.icon} />
                        Тренировки
                    </p>
                </Card>
                <Card size='small' className={styles.mini_card} title='Назначить календарь'>
                    <p>
                        <CalendarTwoTone
                            twoToneColor={['#2f54eb', '#2f54eb']}
                            className={styles.icon}
                        />
                        Календарь
                    </p>
                </Card>
                <Card size='small' className={styles.mini_card} title='Заполнить профиль'>
                    <p>
                        <IdcardOutlined className={styles.icon} />
                        Профиль
                    </p>
                </Card>
                <div>
                    <div className={styles.footer}>
                        <div className={styles.download_card}>
                            <div className={styles.Download}>
                                <p>Скачать на телефон</p>
                                <p>Доступно в PRO-тарифе</p>
                            </div>
                            <div className={styles.Brand}>
                                <p>
                                    <AndroidFilled className={styles.icon_brand} />
                                    Android OS
                                </p>
                                <p>
                                    <AppleFilled className={styles.icon_brand} />
                                    Apple IOS
                                </p>
                            </div>
                        </div>
                        <Button className={styles.btn_reviews}>Смотреть отзывы</Button>
                    </div>
                </div>
            </div>
        </Content>
    );
};
