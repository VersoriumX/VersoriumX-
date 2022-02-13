import * as React from 'react';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({}) => {

  return (
    <h1>Navbar</h1>
  )
};

export default React.memo<NavbarProps>(Navbar);