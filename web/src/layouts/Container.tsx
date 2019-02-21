import styled from "../styled-components";

export default styled.div`
  width: auto;
  margin-left: ${props => props.theme.spacing.unit * 3}px;
  margin-right: ${props => props.theme.spacing.unit * 3}px;
  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: ${props =>
      props.theme.breakpoints.values.lg - props.theme.spacing.unit * 3 * 2}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
