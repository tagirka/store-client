import React, { FC, useContext, useEffect } from 'react';

import { withLayout } from '../layouts/Home-layout/layout';
import CartContent from '../pages-components/Cart/CartContent/cart-content';
import { AppContext } from '../context/app.context';
import { useRouter } from 'next/router';

const Cart: FC = () => {
  const router = useRouter();

  const {
    state: {
      cart: { total },
    },
  } = useContext(AppContext);

  useEffect(() => {
    if (total.count > 0) return;

    router.push('/').then();
  });

  return <>{total.count > 0 ? <CartContent /> : <> </>}</>;
};

export default withLayout(Cart);
