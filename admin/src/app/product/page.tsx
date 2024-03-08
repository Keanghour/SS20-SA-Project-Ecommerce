import React from 'react';
import ProductComponent from '@/components/product/product'; // Renamed the import to avoid conflict
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

const Product = () => { // Corrected the component function name to use PascalCase
    return (
      <DefaultLayout>
        <Breadcrumb pageName="product" />
  
        <div className="flex flex-col gap-10">
          <ProductComponent /> {/* Fixed the component name to use PascalCase */}
        </div>
      </DefaultLayout>
    );
  };
  
  export default Product;
