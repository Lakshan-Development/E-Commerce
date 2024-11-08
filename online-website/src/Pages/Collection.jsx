import React, { useContext, useState, useEffect } from 'react';
import { ShopContaxt } from '../Context/ShowContaxt';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItems from '../Components/ProductItems';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContaxt);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProduct(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex pt-10 border-t h-screen relative">
      {/* Filter Button for Mobile */}
      <button
        onClick={() => setShowFilter(true)}
        className="border-1 px-2 border-black sm:hidden font-semibold text-back fixed top-20 left-4 z-20"
      >
        Open Filters -
      </button>
      

      {/* Filter Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-30 p-5 shadow-md overflow-y-auto transition-transform duration-300 transform ${
          showFilter ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:relative sm:w-1/4`}
      >
        <div className="flex justify-between items-center">
          <p className="text-xl">FILTERS</p>
          {/* Close Button for Mobile */}
          <button
            onClick={() => setShowFilter(false)}
            className="sm:hidden text-gray-500 text-2xl"
          >
            &times;
          </button>
        </div>
        
        <div className="border border-gray-300 p-5 mt-4">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Men" onChange={toggleCategory} /> Men
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Women" onChange={toggleCategory} /> Women
            </label>
          </div>

          <p className="mt-6 mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Topwear" onChange={toggleSubCategory} /> Topwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1 overflow-y-auto p-5 sm:ml-0 ">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title txt1="ALL" txt2="COLLECTIONS" />
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="Relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <ProductItems id={item._id} image={item.image} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
