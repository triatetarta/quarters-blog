import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
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
    font-weight: 500;
  }
`

export default Title
