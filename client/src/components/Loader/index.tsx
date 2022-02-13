import * as React from 'react';

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = ({}) => {

  return (
    <h1>Loader</h1>
  )
};

export default React.memo<LoaderProps>(Loader);