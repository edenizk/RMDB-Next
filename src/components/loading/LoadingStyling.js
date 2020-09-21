import styled from 'styled-components'

export const LoadingWrapper = styled.div `
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.darkGrey};
	z-index: 100000;
`;

export const Caption = styled.h2 `
	position: absolute;
	top: 20px;
	left: 20px;
	color: #ffffff;
`;

export const Gif = styled.img.attrs(props => ({
	src: props.theme.images.rick,
	alt: 'Rick'
}))`
	transition: color .2s;
	color: #f5deb3;

	&:hover {
		color: #ff0000;
	}
`;