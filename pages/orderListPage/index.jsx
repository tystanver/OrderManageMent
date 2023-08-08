import React, { useState, useEffect } from 'react';
import LandingLayout from "@/components/layout/LandingLayout";
import SavedOrderList from '@/components/orderLIst/SavedOrderList';


const OrderList = () => {
  

    return (
        <div>
            <SavedOrderList/>
        </div>
    );
};

export default OrderList;
OrderList.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
  };