import React, { FC } from 'react';
import { PizzaType } from '../../types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../api/api';
import { urlEnum } from '../../state/app.state/state.const';

interface PageProps extends Record<string, unknown> {
  pizza: PizzaType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.fetch(urlEnum.product);

  const paths = data.map((pizza: PizzaType) => {
    return {
      params: { id: pizza._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params === undefined) return { props: {} };

  const id = context.params.id;

  const { data } = await api.fetch(`${urlEnum.product}/${id}`);

  return {
    props: { pizza: data },
  };
};

const PizzaDetail: FC<PageProps> = ({ pizza }) => {
  // console.log(pizza);

  return <h1>{pizza.title}</h1>;
};

export default PizzaDetail;
