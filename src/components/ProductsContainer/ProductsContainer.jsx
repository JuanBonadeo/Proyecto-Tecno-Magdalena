import React, { useEffect, useState } from 'react';
import { collection, getDocs, where, query, startAfter, limit } from 'firebase/firestore';
import { useParams, useLocation, useNavigate} from 'react-router-dom'; // Importamos useLocation
import './productsContainer.css';
import { db } from '../../services/firebase/firebaseConfig';
import ProductList from './ProductList';
import { Loader } from '../Loader/Loader';
import OrderList from '../Order/Order';
import { motion } from 'framer-motion';
import Pagination from '../Pagination/Pagination';

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  const { subcategoriaId } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const [lastDocs, setLastDocs] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);
  const pageSize = 12;
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchProducts = async (pageNumber = 1) => {
    setLoading(true);
    try {
      let productsRef = categoriaId
        ? query(collection(db, 'products'), where('categoria', '==', categoriaId))
        : collection(db, 'products');
      if (subcategoriaId) {
        productsRef = query(productsRef, where('subcategoria', '==', subcategoriaId));
      }

      let queryRef = productsRef;
      if (pageNumber > 1 && lastDocs[pageNumber - 1]) {
        queryRef = query(productsRef, startAfter(lastDocs[pageNumber - 1]), limit(pageSize + 1));
      } else {
        queryRef = query(productsRef, limit(pageSize + 1));
      }

      const snapShot = await getDocs(queryRef);
      const productosAdapted = snapShot.docs.slice(0, pageSize).map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLastDocs((prevLastDocs) => ({
        ...prevLastDocs,
        [pageNumber]: snapShot.docs[snapShot.docs.length - 2],
      }));

      setHasNextPage(snapShot.docs.length > pageSize);
      setProducts(productosAdapted);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProducts([]);
    setLastDocs({});
    fetchProducts(page);
  }, [categoriaId, subcategoriaId, page]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(location.search);
    params.set('page', newPage.toString());
    navigate(`${location.pathname}?${params.toString()}`); // Navegamos a la nueva página con useNavigate
  };

  if (loading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return (
      <motion.h1
        className='noProducts'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 160, damping: 20 }}
      >
        No hay productos disponibles
      </motion.h1>
    );
  }

  return (
    <>
      <motion.div
        className={categoriaId ? 'h1Order h1OrderCategory' : 'h1Order'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 160, damping: 20 }}
      >
        <h1>{categoriaId ? `Nuestros productos en ${categoriaId}` : 'Nuestros Productos'}</h1>
        <OrderList handleOrderChange={handleOrderChange} />
      </motion.div>
      <ProductList products={products} orderBy={orderBy} />
      <Pagination
        hasNextPage={hasNextPage}
        hasPrevPage={page > 1}
        onPageChange={handlePageChange}
        currentPage={page}
      />
    </>
  );
}