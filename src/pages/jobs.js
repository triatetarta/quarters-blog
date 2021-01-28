import React, { useState } from "react"
import useFetchJobs from "../hooks/useFetchJobs"
import styled from "styled-components"
import Job from "../components/Job"
import JobsPagination from "../components/JobsPagination"
import SearchForm from "../components/SearchForm"
import SEO from "../components/seo"
import Spinner from "../components/Spinner"

const Jobs = () => {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  const handleParamChange = e => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <SectWrap>
      <SEO title="Find A Job" />
      <Wrapper>
        <h2>Looking for a Job?</h2>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && <Spinner />}
        {error && <h1>Error. Try Refreshing...</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Wrapper>
    </SectWrap>
  )
}

const SectWrap = styled.section`
  padding-top: 5rem;
  background: #f1f0ff;

  @media screen and (max-width: 800px) {
    padding-top: 2.5rem;
  }
`

const Wrapper = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  h2 {
    text-align: center;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 1.4rem;
      padding-bottom: 1.5rem;
    }
  }
`

export default Jobs
