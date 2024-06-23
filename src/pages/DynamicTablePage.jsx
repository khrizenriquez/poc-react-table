import React from 'react';
import { useParams } from 'react-router-dom';
import TablePage1 from './TablePage1';
import TablePage2 from './TablePage2';
import TablePage3WithLocalizationProvider from './TablePage3';

const DynamicTablePage = () => {
    const { id } = useParams();
    let component = null;

    if (id === '1') {
        component = <TablePage1 />;
    } else if (id === '2') {
        component = <TablePage2 />;
    } else if (id === '3') {
        component = <TablePage3WithLocalizationProvider />;
    } else {
        component = <div>Table not found</div>;
    }

    return (
        <>
            <div>
                <h1>Table number {id}</h1>
            </div>
            {component}
        </>
    )
};

export default DynamicTablePage;
