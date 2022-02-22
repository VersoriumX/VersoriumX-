import * as React from 'react';
import {motion} from "framer-motion";

import {scaleAnimation} from "../../../../utils/animations";

interface ServiceCardProps {
  color: string;
  title: string;
  icon: React.ReactElement<any, any>;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({color, icon, subtitle, title}) => {

  return (
    <motion.div initial="initial" whileHover="hover" whileTap="tap"
                className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <motion.div variants={scaleAnimation}
                  className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </motion.div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </motion.div>
  )
};

export default React.memo<ServiceCardProps>(ServiceCard);

