import React from "react"
import styled from "styled-components"

const SearchForm = ({ params, onParamChange }) => {
  return (
    <>
      <FormStyle className="form">
        <div className="left">
          <label>Description</label>
          <input
            type="text"
            placeholder="Job Title"
            value={params.description}
            name="description"
            onChange={onParamChange}
          />
        </div>

        <div className="right">
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            value={params.location}
            name="location"
            onChange={onParamChange}
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full_time"
          />
          <label>Only Full Time</label>
        </div>
      </FormStyle>
    </>
  )
}

const FormStyle = styled.form`
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    color: var(--clr-grey-5);
    padding-bottom: 0.5rem;
  }

  input[type="text"] {
    margin-right: 0.5rem;
    height: 2.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
    border: 1px solid var(--clr-grey-5);
    outline: none;

    &:focus {
      border: 1px solid var(--clr-primary-5);
    }
  }

  .left,
  .right {
    display: flex;
    flex-direction: column;
    flex: 2;
  }

  .checkbox {
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    flex: 1;

    label {
      padding-bottom: 0rem;
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding-top: 0.5rem;
    }

    .checkbox {
      align-self: center;
      padding-top: 0.5rem;
    }
  }
`

export default SearchForm
