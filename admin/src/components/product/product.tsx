import React from 'react';

const ProductComponent: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Search and filters */}
      <div className="flex justify-between items-center mb-4">
        {/* Left section for search and filters */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search product..."
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          />
          <select
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Filter by category...</option>
            {/* Add options for different categories */}
          </select>
        </div>
        {/* Right section for export button and add new product button */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
              Export
            </button>
            <div className="absolute top-0 right-0 mt-10 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg hidden">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="text-gray-700 dark:text-white py-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-900">PDF</li>
                <li className="text-gray-700 dark:text-white py-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-900">CSV</li>
                <li className="text-gray-700 dark:text-white py-2 pl-3 hover:bg-gray-100 dark:hover:bg-gray-900">XMLX</li>
              </ul>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            New Product
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  {/* Table header */}
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-3">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 dark:text-blue-500" />
      </th>
      <th scope="col" className="px-6 py-3">
        Product name
      </th>
      <th scope="col" className="px-6 py-3">
        Category
      </th>
      <th scope="col" className="px-6 py-3">
        Code product
      </th>
      <th scope="col" className="px-6 py-3">
        Detail
      </th>
      <th scope="col" className="px-6 py-3">
        Price
      </th>
      <th scope="col" className="px-6 py-3">
        Status
      </th>
      <th scope="col" className="px-6 py-3">
        Action
      </th>
    </tr>
  </thead>
  {/* Table body */}
  <tbody>
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 dark:text-blue-500" />
      </td>
      <td className="px-6 py-4">
        Apple MacBook Pro 18"
      </td>
      <td className="px-6 py-4">
        Laptop
      </td>
      <td className="px-6 py-4">
        ABC123
      </td>
      <td className="px-6 py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </td>
      <td className="px-6 py-4">
        $2999
      </td>
      <td className="px-6 py-4">
        <span className="inline-block bg-green-200 text-green-800 dark:bg-green-500 dark:text-white px-2 py-1 rounded-full text-xs uppercase font-semibold">Active</span>
      </td>
      <td className="px-6 py-4">
        <button className="px-4 py-2  font-bold text-black rounded-md hover:bg-blue-500 focus:outline-none">...</button>
      </td>
    </tr>
    {/* Add more table rows here */}
  </tbody>
</table>


      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Previous
          </button>
          {/* Pagination buttons */}
          {/* Add pagination buttons here */}
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ProductComponent;
