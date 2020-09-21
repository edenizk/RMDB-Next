import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.white};
  overflow: hidden;
  z-index: 100;
`;

export const Button = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    color: #f5deb3;
    font-size: 36px;
`;

export const Image = styled.img`
    width: 500px;
    height: 500px;
`;

export const Content = styled.div`
    width: calc(100% - 550px);   
    height: 100%;
    margin-left: 50px;
    text-align: initial;
`;

export const Name = styled.h2`
    display: flex;
    align-items: center;
    padding-right: 20px;
    font-size: 48px;
`;

export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 100%;

    &--Dead {
      background-color: #ff0000;
    }

    &--Alive {
      background-color: #adff2f;
    }

    &--unknown {
      background-color: #808080;
    }
`;

export const Fame = styled.label`

`;

export const EpisodeTitle = styled.h3`
    margin-top: 60px;
    margin-bottom: 40px;
    font-size: 48px;
`;

export const EpisodeList = styled.ul`
    width: 100%;
    height: inherit;
    max-height: 600px;
    margin-top: 60px;
    overflow: auto;
`;

export const Episode = styled.li`
    & + & {
      margin-top: 20px;
    }
`;

export const EpisodeNumber = styled.span`
    margin-bottom: 10px;
`;

export const EpisodeName = styled.h4`
    padding-left: 10px;
`;