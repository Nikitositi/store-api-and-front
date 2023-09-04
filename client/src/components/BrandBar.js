import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';
import { Card } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      {device.brands.map((brand) => {
        return (
          <Card
            key={brand.id}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            className='p-3'
            style={{ cursor: 'pointer', display: 'inline-block' }}>
            {brand.name}
          </Card>
        );
      })}
    </>
  );
});

export default BrandBar;
