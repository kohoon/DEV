import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true
    },
    {
        Header: 'Logo',
        Footer: 'Logo',
        accessor: 'logo'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Sector',
        Footer: 'Sector',
        accessor: 'sector'
    },
    {
        Header: 'MarketCap',
        Footer: 'MarketCap',
        accessor: 'marketcap'
    },
    {
        Header: 'Price',
        Footer: 'Price',
        accessor: 'price'
    },
    {
        Header: 'Change',
        Footer: 'Change',
        accessor: 'today'
    },
    {
        Header: 'Price(30d)',
        Footer: 'Price(30d)',
        accessor: 'price_30d'
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Profile',
        Footer: 'Profile',
        columns: [
            {
                Header: 'Logo',
                Footer: 'Logo',
                accessor: 'logo'
            },
            {
                Header: 'Name',
                Footer: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Sector',
                Footer: 'Sector',
                accessor: 'sector'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'MarketCap',
                Footer: 'MarketCap',
                accessor: 'marketcap'
            },
            {
                Header: 'Price',
                Footer: 'Price',
                accessor: 'price'
            },
            {
                Header: 'Change',
                Footer: 'Change',
                accessor: 'today'
            },
            {
                Header: 'Price(30d)',
                Footer: 'Price(30d)',
                accessor: 'price_30d'
            }
        ]
    },
]