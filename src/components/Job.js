import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const Job = ({ job }) => {
  const [open, setOpen] = useState(false)
  return (
    <Card className="card">
      <div className="card-body">
        <div className="card-content">
          <div className="img">
            <img src={job.company_logo} alt={job.company} />
          </div>
          <div className="text">
            <p>{job.company}</p>
            <h4>{job.title}</h4>
            <span>{new Date(job.created_at).toLocaleDateString()}</span>
            <span className="badge">{job.location}</span>
          </div>
          <div className="right">
            <span>{job.type}</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="apply">
          <ReactMarkdown source={job.how_to_apply} />
        </div>
        <div className="btn">
          <button onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "View Details"}
          </button>
        </div>

        {open && (
          <div className="details">
            <ReactMarkdown source={job.description} />
          </div>
        )}
      </div>
    </Card>
  )
}

const Card = styled.div`
  margin-top: 1rem;
  border-radius: 14px;
  background: white;

  .card-body {
    .card-content {
      display: flex;
      flex-direction: row;
      padding: 2rem 2rem;

      .img {
        flex: 1;
      }
      .text {
        flex: 2;
      }
      .right {
        flex: 1;
      }
      .img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100px;
          object-fit: cover;
        }
      }

      .text {
        p {
          color: var(--clr-primary-5);
        }
        h4 {
          margin-bottom: 1.25rem;
        }
        span {
          color: var(--clr-grey-5);
        }
        .badge {
          margin-left: 1rem;
          background: var(--clr-primary-8);
          color: var(--clr-white);
          padding: 0.3rem 0.5rem;
          border-radius: 14px;
        }
      }
      .right {
        span {
          background: var(--clr-grey-10);
          padding: 0.25rem 0.5rem;
          text-transform: uppercase;
          font-weight: lighter;
          border-radius: var(--radius);
          letter-spacing: var(--spacing);
          color: var(--clr-grey-5);
          font-size: 0.8rem;
        }
      }
    }
    .line {
      height: 1px;
      width: 80%;
      margin: 0 auto;
      background: var(--clr-grey-9);
    }

    .apply {
      word-break: break-all;
      padding: 1rem 2rem 2rem 2rem;
    }

    .btn {
      text-align: right;
      padding: 0 2rem 2rem 0;
      button {
        border: none;
        outline: none;
        background: var(--clr-primary-5);
        color: var(--clr-white);
        padding: 0.5rem 0.7rem;
        border-radius: 14px;
        cursor: pointer;
      }
    }

    .details {
      padding: 2rem 2rem;
      color: var(--clr-grey-3);
      word-break: break-all;
    }
  }

  @media screen and (max-width: 800px) {
    .card-body {
      text-align: center;
      .card-content {
        padding: 1rem 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img {
          flex: 1;
        }
        .text {
          flex: 1;
          margin-top: 2rem;
        }
        .right {
          flex: 1;
          margin-top: 2rem;
        }

        .img {
          img {
            width: 80px;
          }
        }
      }

      .btn {
        text-align: center;
        padding: 0;
        padding-bottom: 1.5rem;
      }
    }
  }
`

export default Job
