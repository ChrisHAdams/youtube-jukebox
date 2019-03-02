import React from "react"
import Styled from 'styled-components';


const UserDetailsStyleLight = Styled.div`
  background-color: white;
  font-color: black;
  font-family: arial;
  font-size: 12px;
`

const UserDetailsStyleDark = Styled.div`
  background-color: #293447;
  font-color: white;
  font-family: arial;
  font-size: 12px;
`

export default function UserDetails(props){

  const UserDetailsStyle = props.lightTheme ? UserDetailsStyleLight : UserDetailsStyleDark;


  if(props.loggedIn){
    return <UserDetailsStyle>Logged In as {props.profileObject.name} </UserDetailsStyle>
  } else {
    return <UserDetailsStyle>Not Logged In</UserDetailsStyle>
  }

}

