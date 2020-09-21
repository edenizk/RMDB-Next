import styled from 'styled-components'

export const Image = styled.img` 
  margin-bottom: -30px;
  width: 250px;
  transition: .4s;
  z-index: 2;
`;

export const Content = styled.div` 
  padding-top: 90px;
  width: 300px;
  height: 200px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,.25), -5px -5px 30px 7px rgba(0,0,0,.22);
  cursor: pointer;
  transition: .4s;
`;

export const Status = styled.span` 
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 10px;
  background-color: #808080;

  &.Alive {
    background-color: green;
  }

  &.Dead {
    background-color: red;
  } 
`;

export const Name = styled.h2` 
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
`;

export const Fame = styled.div` 
  margin-top: 20px;
`;

export const CardStyle = styled.a` 
  align-items: center;
  margin: 40px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    ${Image} {
      transform: scale(1.2);
    }

    ${Content} {
      transform: scale(1.2);
      box-shadow: 5px 5px 30px 15px rgba(0,0,0,.25), 
      -5px -5px 30px 15px rgba(0,0,0,.22);
    }
  }
`;