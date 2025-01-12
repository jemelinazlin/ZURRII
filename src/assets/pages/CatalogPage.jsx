// src/pages/CatalogPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import CatalogDresses from '../components/Dresses'; 
import CatalogPants from '../components/Pants';  
import CatalogShirts from '../components/Shirts';  
import CatalogJackets from '../components/Jackets';  

const CatalogPage = () => {
  const { category } = useParams(); 

  return (
    <div className="catalog-page">
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Catalog` : 'Catalog'}</h1>
      
      {/* Dynamically render catalog components based on category */}
      {category === 'dresses' && <CatalogDresses />}
      {category === 'pants' && <CatalogPants />}
      {category === 'shirts' && <CatalogShirts />}
      {category === 'jackets' && <CatalogJackets />}

      {/* Default rendering for categories that do not match any of the predefined ones */}
      {category && !['dresses', 'pants', 'shirts', 'jackets', 'accessories'].includes(category) && (
        <div className="category-cards-container">
          <div>No items available for this category.</div>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
