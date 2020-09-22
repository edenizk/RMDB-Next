import React from 'react';
import * as styled from './LoadingStyling' 

export const Loading = () => {
  return ( 
    <styled.LoadingWrapper>
      <styled.Caption>GIF by <a href="https://dribbble.com/Julia_Mo">Julia</a></styled.Caption>
      <styled.Gif></styled.Gif>
    </styled.LoadingWrapper>
  )
}

