import * as React from 'react';

interface NavBarItemProps {
  title: string;
  classProps?: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({title, classProps = ""}) => {

  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
  )
};

export default React.memo<NavBarItemProps>(NavBarItem);