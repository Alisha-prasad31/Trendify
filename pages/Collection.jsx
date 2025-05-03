import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Productitems from '../components/Productitems';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState('relavent');

  // Run filter logic whenever dependencies change
  useEffect(() => {
    handleFilter();
  }, [products, selectedCategories, selectedTypes, sortOrder, search]);

  // Handle checkbox change
  const handleCheckboxChange = (value, type) => {
    if (type === 'category') {
      setSelectedCategories((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else if (type === 'type') {
      setSelectedTypes((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  // Filter and sort products
  const handleFilter = () => {
    let updated = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      updated = updated.filter((item) => selectedCategories.includes(item.category));
    }

    // Filter by type
    if (selectedTypes.length > 0) {
      updated = updated.filter((item) => selectedTypes.includes(item.type));
    }

    // Filter by search input
    if (search.trim() !== '') {
      updated = updated.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort products
    if (sortOrder === 'low-high') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(updated);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Sidebar Filters */}
      <div className="min-w-60">
        <div className="flex items-center justify-between">
          <p className="my-2 text-xl flex items-center gap-2">FILTERS</p>
          <img
            className={`h-3 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />
          <button
            onClick={() => setFilter(!showFilter)}
            className="text-sm text-blue-600 underline sm:hidden"
          >
            {showFilter ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* CATEGORY Filter */}
        <div className={`${showFilter ? '' : 'hidden'} sm:block border border-gray-300 pl-5 py-3 mt-6`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label className="flex gap-2" key={cat}>
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  onChange={() => handleCheckboxChange(cat, 'category')}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* TYPE Filter */}
        <div className={`${showFilter ? '' : 'hidden'} sm:block border border-gray-300 pl-5 py-3 my-5`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label className="flex gap-2" key={type}>
                <input
                  className="w-3"
                  type="checkbox"
                  value={type}
                  onChange={() => handleCheckboxChange(type, 'type')}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Title, Sort, Products */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title test1="ALL" test2=" COLLECTIONS" />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <Productitems
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
