import useTheme from '../../../hooks/useTheme';
const Theme = (props) => {
  const [isMoon] = useTheme();
  return <div style={{ color: isMoon ? 'white' : '' }}>{props.children}</div>;
};

export default Theme;
