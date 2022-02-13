import * as React from 'react';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({}) => {

  return (
    <h1>Services</h1>
  )
};

export default React.memo<ServicesProps>(Services);