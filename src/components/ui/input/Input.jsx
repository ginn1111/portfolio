import styles from './Input.module.css';

const Input = ({ id, title, placeholder, type, name }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{title}</label>
      <input
        name={name}
        className={styles.input}
        type={type ?? 'text'}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
export const TextArea = ({ id, title, placeholder, row, name }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{title}</label>
      <textarea
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
