import React, { FC, useEffect } from 'react';

import { useRouter } from 'next/router';

const Pizzas: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/').then();
  });
  return <div>Pizzas Page</div>;
};

export default Pizzas;
