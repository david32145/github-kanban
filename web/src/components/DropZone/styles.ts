import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: ${(props) => (props.show ? "120px" : "0px")};
  overflow: hidden;
  background-color: #f6fcfe;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  font-family: Roboto;
  font-weight: 300;
  font-size: 14px;

  color: #777777;
`;
