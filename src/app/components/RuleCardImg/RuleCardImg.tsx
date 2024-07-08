import Image from 'next/image';
import { motion } from 'framer-motion';
import type { IRuleCardImgProps } from '../../types/entitiesTypes';

import "./ruleCardImg_tamp.css";

export function RuleCardImg({ cardImg, imgAlt = "", classWrapper = "" }: IRuleCardImgProps) {
  return (
    <div className={classWrapper}>
      <motion.div>
        <Image src={cardImg} alt={imgAlt} className="rulesImg" />
      </motion.div>
    </div>
  );
}
