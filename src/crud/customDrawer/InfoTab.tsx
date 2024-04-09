import React, { useMemo } from 'react'
import { FiCameraOff } from 'react-icons/fi'
import { IUser } from '../../mocks/data/users'
import cn from 'classnames'

import styles from './InfoTab.module.scss'

export default function InfoTab({
    title,
    description,
    cover_url,
    city,
    max_players,
    host_user,
    scheduled_time,
}: IUser) {
    const node = useMemo(() => {
        if (cover_url) {
            return <img src={cover_url} />
        } else {
            return <FiCameraOff />
        }
    }, [cover_url])

    return (
        <dl>
            <dt className={styles.title}>Title</dt>
            <dd className={styles.desc}>{title}</dd>
            <dt className={styles.title}>Description</dt>
            <dd className={styles.desc}>{description}</dd>
            <dt className={styles.title}>Host user</dt>
            <dd className={styles.desc}>{host_user?.user_id}</dd>
            <dd className={styles.desc}>{host_user?.first_name}</dd>
            <dd className={styles.desc}>{host_user?.last_name}</dd>
            <dd className={styles.desc}>{host_user?.city}</dd>
            <dd className={styles.desc}>{host_user?.photo_url}</dd>

            <dt className={styles.title}>City</dt>
            <dd className={styles.desc}>{city}</dd>
            <dt className={styles.title}>Count of players</dt>
            <dd className={styles.desc}>{max_players}</dd>
            <dt className={styles.title}>Scheduled time</dt>
            <dd className={styles.desc}>{scheduled_time}</dd>
        </dl>
    )
}
