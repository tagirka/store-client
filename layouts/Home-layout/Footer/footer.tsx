import React, { FC } from 'react';
import { FooterProps } from './footer.props';

const Footer: FC<FooterProps> = ({ ...props }) => {
  return <div {...props}>footer</div>;
};

export default Footer;
