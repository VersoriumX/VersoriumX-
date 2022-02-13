import * as React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {

  return (
    <h1>Footer</h1>
  )
};

export default React.memo<FooterProps>(Footer);