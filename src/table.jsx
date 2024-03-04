import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmployeeTableContainer = styled.div`
  width: 94.5%;
`;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: larger;
  color: ${({ color }) => color};
  border: ${props => props.border};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  border: 1px solid ${({ color }) => color};
`;

const TableHeaderCell = styled.th`
  border: 1px solid ${({ color }) => color};
  padding: 8px;
  text-align: left;
  cursor: pointer;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};
  font-size: larger;

  &.active {
    color: ${({ color }) => color};
  }
`;

const TableCell = styled.td`
  border: 1px solid ${({ color }) => color};
  padding: 8px;
  text-align: left;
`;

const PagesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled.button`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: ${({ color }) => color};
  font-weight: 800;

  &:disabled {
    color: gray;
    opacity: 0.5;
    font-weight: 400;
  }

  &:hover {
    border: none;
  }
`;

const NoDataMessage = styled.div`
  text-align: center;
  padding: 20px;
`;

const Table = ({ rowsPerPage, datas, headers, apparenceColor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (datas.length === 0) {
      setCurrentPage(0);
    }
  }, [datas]);

  const sortData = (data) => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const dateA = new Date(a[sortColumn]);
      const dateB = new Date(b[sortColumn]);

      if (dateA < dateB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (dateA > dateB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const darkenColor = (color) => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.round(r * 0.6);
    g = Math.round(g * 0.6);
    b = Math.round(b * 0.6);

    const darkColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return darkColor;
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const renderSortIcon = (column) => {
    if (column !== sortColumn) {
      return null;
    }
    return sortDirection === 'asc' ? ' ▲' : ' ▼';
  };

  const getFilteredData = (data) => {
    if (!searchTerm) return data;
    return data.filter((item) =>
      Object.values(item).some((value) => {
        if (value !== null && value !== undefined) {
          return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      })
    );
  };

  const filteredDatas = getFilteredData(datas);
  const sortedDatas = sortData(filteredDatas);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedDatas.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredDatas.length / rowsPerPage);

  return (
    <EmployeeTableContainer>
      <Input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        color={darkenColor(apparenceColor)}
        border={`1px solid ${darkenColor(apparenceColor)}`}
        />
      <StyledTable color={darkenColor(apparenceColor)}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeaderCell
                key={index}
                onClick={() => handleSort(header.key)}
                backgroundcolor={apparenceColor}
                color={darkenColor(apparenceColor)}
              >
                {header.name}
                {renderSortIcon(header.key)}
              </TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredDatas.length === 0 ? (
            <tr>
              <TableCell colSpan={headers.length} className="no_data">
                No data available in table
              </TableCell>
            </tr>
          ) : (
            currentRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <TableCell key={colIndex}>{row[header.key]}</TableCell>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </StyledTable>

      <PagesContainer>
        <StyledButton
          backgroundcolor={apparenceColor}
          color={darkenColor(apparenceColor)}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1 || filteredDatas.length === 0}
        >
          Précédent
        </StyledButton>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <StyledButton
          backgroundcolor={apparenceColor}
          color={darkenColor(apparenceColor)}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Suivant
        </StyledButton>
      </PagesContainer>
    </EmployeeTableContainer>
  );
};

Table.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Table;
