import styled from 'styled-components'

export const Cards = styled.div`

`;

export const CardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	height: -webkit-fill-available;
	overflow: auto;
	list-style: none;
`;

export const CardItem = styled.li`

`;

export const Loading = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.darkGrey};
	z-index: 1000000;
`;

export const GetSchwify = styled.img.attrs(props => ({
			src: props.theme.images.rick,
			alt: 'Get Schwifty'
	}))`
	width: 300px;
	height: 300px;
	animation: ${props => props.theme.animations.spin} infinite .5s linear;
`;