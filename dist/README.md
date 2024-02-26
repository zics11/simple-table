# Simple Table

Simple Table is a lightweight and customizable React component library for displaying tables with pagination, sorting, and searching features.

## Features

- **Pagination:** Display large datasets across multiple pages.
- **Sorting:** Sort table data by clicking on column headers.
- **Searching:** Filter table data based on search terms.
- **Customizable Appearance:** Customize table appearance by providing a color theme.

## Installation

You can install Simple Table via npm or yarn:

```bash
npm install simple-table

or

yarn add simple-table


## Usage 

import React from 'react';
import ReactDOM from 'react-dom';
import Table from 'my-simple-table';

  const headers = [
    { key: 'firstName', name: 'First name' },
    { key: 'lastName', name: 'Last name' },
    { key: 'startDate', name: 'Start date' },
    { key: 'zipCode', name: 'Zip code' },
  ]

const datas = [
  { firstName: 'John', lastName: '30' , startDate: "2024-02-09" , zipCode: "11000"},
  // Add more data rows as needed
];

ReactDOM.render(
  <Table
    rowsPerPage={5}
    datas={datas}
    headers={headers}
    apparenceColor="#3498db"
  />,
  document.getElementById('root')
);

## Props

rowsPerPage: The number of rows to display per page.
datas: An array of objects representing the data to be displayed in the table.
headers: An array of objects representing the headers of the table columns whith key and name of columns
apparenceColor: The color theme for the table appearance.

## License

This project is licensed under the MIT License 


... 
Don't forget to replace sample data and customize the information according to your library's needs. If you have any questions or need more information, don't hesitate to ask!

Julien
