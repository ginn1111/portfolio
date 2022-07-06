import styledComponents from 'styled-components';

const Blur = styledComponents.div`
  position: absolute;
  top: ${(props) => `${props?.top}` ?? 'unset'};
  right: ${(props) => `${props?.right}` ?? 'unset'};
  bottom: ${(props) => `${props?.bottom}` ?? 'unset'};
  left: ${(props) => `${props?.left}` ?? 'unset'};
  filter: blur(${(props) => props?.filterBlur ?? 1});
  background-color: ${(props) => props?.backgroundColor ?? '#fff'};
  width: 20rem;
  height: 20rem;
  z-index: -9;
`;

export default Blur;
