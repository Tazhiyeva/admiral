import React, { useRef } from 'react'
import cn from 'classnames'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button, Card, Page } from '../../../admiral'
import image from '/images/main-page.svg'
import twitterIcon from '/images/twitter.svg'
import styles from './MainPage.module.scss'

const MainPage = () => {
    const ArrowDownIcon = useRef(<FiArrowUpRight className={styles.icon} />).current
    const TwitterIcon = useRef(<img src={twitterIcon} alt="twitter" />).current

    return (
        <div className={styles.page}>
            <Card className={styles.page__wrapper} verticalSpace="3xl" horizontalSpace="3xl">
                <div className={styles.page__container}>
                    <h1 className={styles.page__title}>
                        Welcome to oiynlike ARM! &#9996;&#127995;
                    </h1>
                    <h3 className={styles.page__descr}></h3>
                    <ul className={styles.page__actions}>
                        <li>
                            <a href="google.com" target="_blank" rel="noopener noreferrer">
                                <Button
                                    view="ghost"
                                    className={styles.button}
                                    iconRight={ArrowDownIcon}
                                >
                                    Project repository
                                </Button>
                            </a>
                        </li>

                        <li>
                            <a href="mailto:madinatazhiyeva@gmail.com">
                                <Button
                                    view="ghost"
                                    className={cn(styles.button, styles['button--connect_with_us'])}
                                    iconRight={ArrowDownIcon}
                                >
                                    <span>Connect with us:</span>
                                    <span className={styles.button__link}>
                                        madinatazhiyeva@gmail.com
                                    </span>
                                </Button>
                            </a>
                        </li>
                    </ul>

                    <img
                        className={styles.page__image}
                        src={image}
                        width="569px"
                        height="284px"
                        alt="Welcome to oiynlike ARM!"
                    />
                </div>
            </Card>
        </div>
    )
}

export default MainPage
