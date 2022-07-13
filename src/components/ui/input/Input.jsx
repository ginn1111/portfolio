import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ id, title, placeholder, type, name }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{title}</label>
      <input
        required
        name={name}
        className={styles.input}
        type={type ?? 'text'}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
});

export const TextArea = ({ id, title, placeholder, row, name }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{title}</label>
      <textarea
        required
        name={name}
        rows={row ?? 1}
        className={styles.input}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
