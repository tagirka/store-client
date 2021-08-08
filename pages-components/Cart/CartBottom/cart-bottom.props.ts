import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartBottomProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  total: {
    count: number;
    sum: number;
  };
}
