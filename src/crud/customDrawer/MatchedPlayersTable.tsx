import React, { useMemo } from 'react'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { MatchedPlayers, IUser } from '../../mocks/data/users'
import { Table, TableColumnsType } from '../../../admiral'

const columns: TableColumnsType<MatchedPlayers> = [
    {
        title: 'User ID',
        dataIndex: 'user_id',
        key: 'user_id',
        width: 200,
    },
    {
        title: 'Photo',
        dataIndex: 'photo_url',
        key: 'photo_url',
        width: 150,
    },
    {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'first_name',
        width: 150,
    },
    {
        title: 'Last name',
        dataIndex: 'last_name',
        key: 'last_name',
        width: 150,
        // render: (value) => {
        //     return (
        //         <span style={{ whiteSpace: 'nowrap' }}>
        //             {format(parseISO(value), 'dd.MM.yyyy')}
        //         </span>
        //     )
        // },
    },
]

export default function MatchedPlayersTable({ matched_players }: IUser) {
    const data = useMemo(() => {
        let result: MatchedPlayers[] = []
        if (matched_players !== undefined) {
            for (let i = 0; i < matched_players?.length; i++) {
                result.push({
                    user_id: matched_players[i].user_id,
                    first_name: matched_players[i].first_name,
                    key: i,
                })
            }
        }
        return result
    }, [])

    // const scrollX = useMemo(() => {
    //     return columns.reduce((acc, column) => {
    //         const width = Number(column.width)
    //         return isNaN(width) ? acc + 200 : acc + width
    //     }, 0)
    // }, [columns])

    return (
        <Table
            dataSource={data}
            rowKey="id"
            columns={columns}
            scroll={{
                x: scrollX,
            }}
            sticky
            size="small"
            pagination={false}
        />
    )
}
