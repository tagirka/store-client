import React, { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ItemProps } from './item.props';
import styles from './item.module.scss';
import plusIcon from '../../../../public/plus.svg';
import Button from '../../../../components/Button/button';
import DepthSelector from './Selectors/DepthSelector';
import SizeSelector from './Selectors/SizeSelector';

import { AppContext } from '../../../../context/app.context';

import { ItemUtils } from '../item.utils';
import Link from 'next/link';
import { cartSelectors } from '../../../../state/selectors/cart.selectors';

const Item: FC<ItemProps> = ({
  handlerAdd,
  pizza: { _id: productId, title, image, cost, availableDepths, availableSizes },
}) => {
  const {
    state: {
      response: { depth: depths, size: sizes },
      cart: { cartItems },
    },
  } = useContext(AppContext);

  const [viewDepths, setViewDepths] = useState(ItemUtils.fillViewSelector(depths, availableDepths));
  const [viewSizes, setViewSizes] = useState(ItemUtils.fillViewSelector(sizes, availableSizes));
  const [count, setCount] = useState(0);

  const handlerAddBtn = () => {
    const activeSize = ItemUtils.getActiveSelector(viewSizes);
    const activeDepth = ItemUtils.getActiveSelector(viewDepths);

    if (activeDepth === undefined || activeSize === undefined) return;

    setCount((prev) => prev + 1);

    const costWithRatio = ItemUtils.sumTotal(activeDepth.ratioCost, activeSize.ratioCost, cost);

    const activeItem = {
      itemId: productId,
      depth: activeDepth._id,
      size: activeSize._id,
      cost: costWithRatio,
      count: 1,
      total: costWithRatio,
    };

    handlerAdd(activeItem);
  };

  useEffect(() => {
    if (cartItems.length === 0) return;

    const selectItem = cartSelectors.cartItemByProductId(cartItems, productId);

    if (selectItem.length === 0) return;

    setCount(
      selectItem.reduce((arr, cur) => {
        return arr + cur.count;
      }, 0),
    );
  }, [cartItems, productId]);

  return (
    <div className={styles.pizzaBlock}>
      <Link href={'/pizzas/' + productId}>
        <a>
          <Image className={styles.pizzaBlock__image} src={image} alt={title} width="260px" height="260px" />
          <h4 className={styles.pizzaBlock__title}>{title}</h4>
        </a>
      </Link>
      <div className={styles.pizzaBlock__selector}>
        <DepthSelector depths={viewDepths} setActive={setViewDepths} />
        <SizeSelector sizes={viewSizes} setActive={setViewSizes} />
      </div>

      <div className={styles.pizzaBlock__bottom}>
        <div className={styles.pizzaBlock__price}>от {cost} ₽</div>
        <Button appearance="outline" onClick={handlerAddBtn}>
          <Image src={plusIcon} alt="plus icon" />
          <span>Добавить</span>
          <i>{count}</i>
        </Button>
      </div>
    </div>
  );
};

export default Item;
