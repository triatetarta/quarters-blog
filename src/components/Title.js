import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  z-index: 2;
  position: relative;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: lighter;
    font-size: 1.5rem;
  }
`

export default Title
