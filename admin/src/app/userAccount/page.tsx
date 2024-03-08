import React from 'react';
import UserAccountComponent from '@/components/userAccount/userAccount'; // Renamed the import to avoid conflict
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

const UserAccountPage = () => { // Renamed the component function
    return (
      <DefaultLayout>
        <Breadcrumb pageName="userAccount" />
  
        <div className="flex flex-col gap-10">
          <UserAccountComponent /> 
        </div>
      </DefaultLayout>
    );
  };
  
  export default UserAccountPage;
