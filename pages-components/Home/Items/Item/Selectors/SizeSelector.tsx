import React, { DetailedHTMLProps, Dispatch, FC, LiHTMLAttributes, SetStateAction } from 'react';
import { SizeType } from '../../../../../types';

import styles from './size.module.scss';
import cn from 'classnames';

interface SizeSelectorProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  sizes: SizeType[];
  setActive: Dispatch<SetStateAction<SizeType[]>>;
}

const SizeSelector: FC<SizeSelectorProps> = ({ sizes, setActive }) => {
  const setActiveElement = (id: string) => {
    setActive(sizes.map((s) => ({ ...s, active: s._id === id })));
  };

  return (
    <div className={styles.sizeSelector}>
      <ul>
        {sizes.map((s) => {
          return (
            <li
              onClick={() => setActiveElement(s._id)}
              key={s._id}
              className={cn({
                [styles.sizeSelectorActive]: s.active,
                [styles.sizeSelectorDisableItem]: !s.visible,
              })}
            >
              {s.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SizeSelector;
