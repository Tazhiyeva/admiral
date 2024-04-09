import React from 'react'
import { FileField, TableColumnsType } from '../../../admiral'
import { IUser } from '../../mocks/data/users'

export const tableColumns: TableColumnsType<IUser> = [
    {
        title: 'Cover',
        dataIndex: 'cover_url',
        key: 'cover_url',
        width: 90,
        render: (value) => <FileField {...value} />,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 200,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 200,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Created at',
        dataIndex: 'created_at',
        key: 'created_at',
        // render: (value) => {
        //     return (
        //         <span style={{ whiteSpace: 'nowrap' }}>
        //             {format(parseISO(value), 'dd.MM.yyyy')}
        //         </span>
        //     )
        // },
    },

    {
        title: 'Updated at',
        dataIndex: 'updated_at',
        key: 'updated_at',
        // render: (value) => {
        //     return (
        //         <span style={{ whiteSpace: 'nowrap' }}>
        //             {format(parseISO(value), 'dd.MM.yyyy')}
        //         </span>
        //     )
        // },
    },
]
