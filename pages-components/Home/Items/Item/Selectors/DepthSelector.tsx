import React, {
  DetailedHTMLProps,
  Dispatch,
  FC,
  LiHTMLAttributes,
  SetStateAction,
} from 'react';
import { DepthType } from '../../../../../types';
import styles from './depth.module.scss';
import cn from 'classnames';

interface DepthSelectorProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  depths: DepthType[];
  setActive: Dispatch<SetStateAction<DepthType[]>>;
}

const DepthSelector: FC<DepthSelectorProps> = ({ depths, setActive }) => {
  const setActiveElement = (id: string) => {
    setActive(
      depths.map((d) => {
        return { ...d, active: d._id === id };
      }),
    );
  };

  return (
    <div className={styles.depthSelector}>
      <ul>
        {depths.map((d) => {
          return (
            <li
              onClick={() => setActiveElement(d._id)}
              key={d._id}
              className={cn({
                [styles.depthSelectorActive]: d.active,
                [styles.depthSelectorDisableItem]: !d.visible,
              })}
            >
              {d.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DepthSelector;
