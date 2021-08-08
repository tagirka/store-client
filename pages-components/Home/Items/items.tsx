import React, { FC, useContext, useEffect } from 'react';

import { ItemsProps } from './items.props';
import Item from './Item/item';
import { AppContext } from '../../../context/app.context';

import { CartItemType } from '../../../types';
import { ItemActions } from '../../../state/actions/item.actions';
import { CartActions } from '../../../state/actions/cart.actions';

const Items: FC<ItemsProps> = () => {
  const {
    state: {
      isLoading,
      view: { viewProducts, viewCategories },
    },
    dispatch,
  } = useContext(AppContext);

  const addItemToCart = (data: CartItemType) => {
    dispatch(CartActions.addItem(data));
  };

  useEffect(() => {
    if (!isLoading) return;
    // if (pizzas.length === 0) return;

    dispatch(ItemActions.fillViewProducts());
  }, [viewCategories, isLoading, dispatch]);

  return (
    <>
      {viewProducts && (
        <>
          {viewProducts.length === 0 ? (
            <>Loading</>
          ) : (
            viewProducts.map((pizza) => {
              return <Item key={pizza._id} pizza={pizza} handlerAdd={(data) => addItemToCart(data)} />;
            })
          )}
        </>
      )}

      <style jsx global>{``}</style>
    </>
  );
};

export default Items;
