import React from "react"
import TitleB from "./TitleB"
import styled from "styled-components"
import { Link } from "gatsby"

const BannerJob = () => {
  return (
    <Wrapper>
      <TitleB title="Find A Job" />
      <p>Are you looking for a Job in Tech? No problem, search below:</p>
      <Link to="/jobs">
        <button className="btn">Find A Job</button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  p {
    color: var(--clr-grey-5);
  }

  .btn {
    border: none;
    outline: none;
    background: var(--clr-primary-5);
    color: white;
    padding: 0.9rem 0.75rem;
    cursor: pointer;
    border-radius: var(--radius);
  }
`

export default BannerJob
