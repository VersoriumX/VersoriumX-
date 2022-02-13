import * as React from 'react';

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = ({}) => {

  return (
    <h1>Welcome</h1>
  )
};

export default React.memo<WelcomeProps>(Welcome);