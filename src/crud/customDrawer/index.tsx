import React, { useCallback, useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { IUser } from '../../mocks/data/users'
import { createCRUD, Button, Typography, Drawer, Tabs, EditAction } from '../../../admiral'
import MatchedPlayers from './MatchedPlayersTable'
import InfoTab from './InfoTab'
import { tableColumns } from './tableColumns'
import { filterFields } from './filterFields'
import { createFields } from './createFields'
import { editFields } from './editFields'
import PageTopContent from '../../components/PageTopContent'

export const path = '/crud-with-custom-drawer'
export const resource = 'admin/gamecards'

export const CRUD = createCRUD({
    path,
    resource,
    index: {
        title: 'Gamecards',
        newButtonText: '',
        tableColumns,
        tableActions: {
            title: 'Actions',
            key: 'actions',
            fixed: 'right',
            width: 100,
            render: (_value, record: IUser) => {
                const [visible, show, close] = useDrawer()
                return (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={show}
                            type="button"
                            view="clear"
                            size="S"
                            iconRight={<FiEye />}
                        />
                        <Drawer
                            visible={visible}
                            onClose={close}
                            title={`View gamecard with id #${record.id}`}
                            width={760}
                        >
                            <Tabs defaultActiveKey="1" type="card">
                                <Tabs.TabPane tab="Info" key="1">
                                    <InfoTab {...record} />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Matched Players" key="2">
                                    <MatchedPlayers {...record} />
                                </Tabs.TabPane>
                            </Tabs>
                        </Drawer>

                        <EditAction
                            pathname={`${path}/${record.id}`}
                            behavior="backgroundRoute"
                            mainRoutePath={`${path}/:id`}
                        />
                    </div>
                )
            },
        },
    },
    // filter: {
    //     topToolbarButtonText: 'Filter',
    //     fields: filterFields,
    // },
    form: {
        create: {
            fields: createFields,
        },
        edit: {
            fields: editFields,
        },
    },
    create: {
        title: 'Create New Gamecard',
    },
    update: {
        title: (id: string) => `Edit GameCard#${id}`,
        view: 'drawer',
    },
    topContent: <PageTopContent title="In this page, we can moderate users' gamecards." />,
})

const useDrawer = (): [boolean, () => void, () => void] => {
    const [visible, setVisible] = useState(false)

    const show = useCallback(() => {
        setVisible(true)
    }, [])

    const close = useCallback(() => {
        setVisible(false)
    }, [])

    return [visible, show, close]
}
