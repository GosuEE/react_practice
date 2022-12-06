import List_Container from '../list-container/List_Container';
import InputForm from '../form/InputForm'
import Header from '../header/Header.js'
import React from 'react'
import styled from "styled-components"

const StyledPage = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`

function Page() {
  return (
    <StyledPage>
      <Header />
      <InputForm />
      <List_Container />
    </StyledPage>
  );
}

export default Page;