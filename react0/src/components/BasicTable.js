import React, { useMemo } from 'react'
import { useTable } from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
// import { COLUMNS } from './columns'
// import './table.css'

function BasicTable() {
    const data = React.useMemo(
      () => [
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ],
      []
    )
  
    const columns = React.useMemo(
      () => [
        {
          Header: 'Column 1',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
        },
      ],
      []
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
  
    return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default BasicTable;



// export const BasicTable = () => {
//     const columns = useMemo(() => COLUMNS) 
//     const data = useMemo(() => MOCK_DATA)
//     const { }
    
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }