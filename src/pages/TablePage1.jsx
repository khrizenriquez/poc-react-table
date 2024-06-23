import React, { useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

const ReadMore = ({ text }) => {
    const maxLength = 50;
    const [showFullText, setShowFullText] = useState(false);

    if (text.length <= maxLength) return <span>{text}</span>;

    return (
        <span>
            {showFullText ? text : `${text.substring(0, maxLength)}...`}
            <button onClick={() => setShowFullText(!showFullText)}>
                {showFullText ? 'Read less' : 'Read more'}
            </button>
        </span>
    );
};

const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove Non enim nisi cillum consequat labore cupidatat esse labore. Dolore id magna eu pariatur cillum elit proident in aute nulla sint nostrud aute laboris. Fugiat labore ipsum culpa culpa est.',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet Non enim nisi cillum consequat labore cupidatat esse labore. Dolore id magna eu pariatur cillum elit proident in aute nulla sint nostrud aute laboris. Fugiat labore ipsum culpa culpa est. Non enim nisi cillum consequat labore cupidatat esse labore. Dolore id magna eu pariatur cillum elit proident in aute nulla sint nostrud aute laboris. Fugiat labore ipsum culpa culpa est. Non enim nisi cillum consequat labore cupidatat esse labore. Dolore id magna eu pariatur cillum elit proident in aute nulla sint nostrud aute laboris. Fugiat labore ipsum culpa culpa est.',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike lorem ipsum dolor sit amet consectetur adipiscing elit',
      city: 'Charleston',
      state: 'South Carolina',
    },
];
  
const TablePage1 = () => {
    const columns = useMemo(() => [
        {
          accessorKey: 'name.firstName', //access nested data with dot notation
          header: 'First Name',
          size: 150,
        },
        {
          accessorKey: 'name.lastName',
          header: 'Last Name',
          size: 150,
        },
        {
          accessorKey: 'address', //normal accessorKey
          header: 'Address',
          size: 200,
          Cell: ({ cell }) => (
            <ReadMore text={cell.getValue()} />
          ),
        },
        {
          accessorKey: 'city',
          header: 'City',
          size: 150,
          Cell: ({ cell }) => (
            <ReadMore text={cell.getValue()} />
          ),
        },
        {
          accessorKey: 'state',
          header: 'State',
          size: 150,
          Cell: ({ cell }) => (
            <ReadMore text={cell.getValue()} />
          ),
        },
    ], [],);
  
    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });
    
    return (
        <>
            <MaterialReactTable table={table} />
        </>
    );
};

export default TablePage1;
