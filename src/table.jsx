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
  color: black;
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

/**
 * Composant de tableau pour afficher les données des employés.
 * @component
 * @param {Object} props - Les props du composant.
 * @param {number} props.rowsPerPage - Le nombre de lignes par page.
 * @param {Array.<Object>} props.datas - Les données des employés à afficher.
 * @param {Array.<Object>} props.headers - Les en-têtes du tableau.
 * @param {string} props.apparenceColor - La couleur d'apparence du tableau.
 * @returns {JSX.Element} Composant de tableau pour afficher les données des employés.
 */
const Table = ({ rowsPerPage, datas, headers, apparenceColor }) => {
  // État pour gérer la page actuelle
  const [currentPage, setCurrentPage] = useState(1);
  // État pour gérer la colonne de tri
  const [sortColumn, setSortColumn] = useState(null);
  // État pour gérer la direction de tri
  const [sortDirection, setSortDirection] = useState('asc');
  // État pour gérer le terme de recherche
  const [searchTerm, setSearchTerm] = useState('');

  // Effet pour mettre à jour la page actuelle si les données changent
  useEffect(() => {
    if (datas.length === 0) {
      setCurrentPage(0);
    }
  }, [datas]);

  /**
   * Fonction pour trier les données.
   * @param {Array.<Object>} data - Les données à trier.
   * @returns {Array.<Object>} Les données triées.
   */
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

  /**
  * Fonction pour assombrir une couleur.
  * @param {string} color - La couleur à assombrir au format hexadécimal.
  * @returns {string} La couleur assombrie au format hexadécimal.
  */
  const darkenColor = (color) => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.round(r * 0.4);
    g = Math.round(g * 0.4);
    b = Math.round(b * 0.4);

    const darkColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return darkColor;
  };

  /**
   * Fonction pour gérer le tri des colonnes.
   * @param {string} column - Le nom de la colonne à trier.
   * @returns {void}
  */
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  /**
  * Fonction pour rendre l'icône de tri.
  * @param {string} column - Le nom de la colonne.
  * @returns {string|null} L'icône de tri ou null si la colonne n'est pas triée.
  */
  const renderSortIcon = (column) => {
    if (column !== sortColumn) {
      return null;
    }
    return sortDirection === 'asc' ? ' ▲' : ' ▼';
  };

  /**
  * Fonction pour filtrer les données en fonction du terme de recherche.
  * @param {Array.<Object>} data - Les données à filtrer.
  * @returns {Array.<Object>} Les données filtrées.
  */
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

  // Récupération des données filtrées
  const filteredDatas = getFilteredData(datas);
  // Tri des données filtrées
  const sortedDatas = sortData(filteredDatas);
  // Calcul de l'index de la dernière ligne sur la page actuelle
  const indexOfLastRow = currentPage * rowsPerPage;
  // Calcul de l'index de la première ligne sur la page actuelle
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // Récupération des lignes actuelles à afficher
  const currentRows = sortedDatas.slice(indexOfFirstRow, indexOfLastRow);
  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredDatas.length / rowsPerPage);

  return (
    <EmployeeTableContainer>
      {/* Champ de recherche */}
      <Input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        border={`1px solid ${darkenColor(apparenceColor)}`}
        />
      {/* Tableau des données */}
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

      {/* Pagination */}
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

// Spécification des types de props
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
