// it might be said:
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  transition: transform 0.5s ease;
    &:hover{
        transform: scale(0.99)
    }
`
export default Image
