import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Pagination.css';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const Pagination = ({ hasNextPage, hasPrevPage, onPageChange, currentPage }) => {
  const handleNextPage = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1); // Llamar a la función de cambio de página con la página siguiente
    }
  };

  const handlePreviousPage = () => {
    if (hasPrevPage) {
      onPageChange(currentPage - 1); // Llamar a la función de cambio de página con la página anterior
    }
  };

  return (
    <div className="pagination-buttons">
      <button className='ctrl' onClick={handlePreviousPage} disabled={!hasPrevPage}><WestIcon/></button>
      <span>{currentPage}</span>
      <button className='ctrl' onClick={handleNextPage} disabled={!hasNextPage}><EastIcon/></button>
    </div>
  );
};

export default Pagination;

