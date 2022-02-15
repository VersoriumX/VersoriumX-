import * as React from 'react';

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = ({}) => {

  return (
    <div className="flex justify-center items-center py-3">
      <div className="h-32 w-32 rounded-full border-b-2 border-blue-700 animate-spin">

      </div>
    </div>
  )
};

export default React.memo<LoaderProps>(Loader);