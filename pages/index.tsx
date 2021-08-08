import { GetStaticProps } from 'next';
import { FC, useContext, useEffect } from 'react';

import { AppContext } from '../context/app.context';

import Content from '../pages-components/Home/Content/content';
import { api } from '../api/api';

import { AppStateType } from '../state/app.state/app.state';
import { urlEnum } from '../state/app.state/state.const';
import { ItemActions } from '../state/actions/item.actions';
import { ResponseModelType } from '../types';
import { withLayout } from '../layouts/Home-layout/layout';

interface PageProps extends Record<string, unknown> {
  itemResponses: AppStateType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allData: ResponseModelType = await api.fetchAllData(Object.values(urlEnum));

  if (allData === undefined) return { props: { itemResponses: {} } };

  if (Object.values(allData).includes([])) {
    return {
      props: { itemResponses: {} },
    };
  }

  return {
    props: { itemResponses: { response: allData } },

    // redirect: {
    //   destination: '/Cart',
    //   permanent: false,
    // },
  };
};

const Home: FC<PageProps> = ({ itemResponses }) => {
  const {
    state: { isLoading },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (Object.keys(itemResponses).length === 0) {
      dispatch(ItemActions.fetch(false));
      return;
    }

    dispatch(ItemActions.fill(itemResponses));
    dispatch(ItemActions.fetch(true));
  }, [itemResponses, dispatch]);

  return (
    <>
      <Content />
    </>
  );
};

export default withLayout(Home);
