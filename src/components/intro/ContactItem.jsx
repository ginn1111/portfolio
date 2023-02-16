import React from 'react';
import { motion } from 'framer-motion';

const ContactItem = ({ url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <motion.img src={icon} alt="github" whileHover={{ y: 15 }} />
    </a>
  );
};

export default ContactItem;
