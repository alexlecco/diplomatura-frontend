import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CustomContent from './CustomContent';
import CustomFooter from './CustomFooter';
import NewProduct from './NewProduct';

const Main = ({ userName, products }) => {
  const [ screen, setScreen ] = useState(0);

  return(
    <Layout>
      <CustomHeader userName={userName} />
      {
        screen === 0 ? (
          <CustomContent products={products} screen={screen} setScreen={setScreen} />
        ) : (
          <NewProduct screen={screen} setScreen={setScreen} />
        )
      }
      <CustomFooter />
    </Layout>
  );
}

export default Main;
