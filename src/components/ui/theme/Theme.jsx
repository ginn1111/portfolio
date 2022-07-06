import useTheme from '../../../hooks/useTheme';
const Theme = (props) => {
  const [isMoon] = useTheme();
  return <span style={{ color: isMoon ? 'white' : '' }}>{props.children}</span>;
};

export default Theme;
