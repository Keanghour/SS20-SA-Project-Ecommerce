import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import ReportsComponent from '@/components/reports/reports'; // Corrected component name to use PascalCase

const ReportsPage: React.FC = () => { // Corrected the component function name to use PascalCase
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Product Reports" />

      <div className="flex flex-col gap-10">
        <ReportsComponent /> 
      </div>
    </DefaultLayout>
  );
};

export default ReportsPage;
