import React from "react"
import Styled from 'styled-components';


const ThemeChangeButton= Styled.button`
  margin: 1px;
`

export default (props) => <ThemeChangeButton  onClick={props.onClick}>Change Theme</ThemeChangeButton>