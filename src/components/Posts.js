import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Title from "./Title"
import { IoMdArrowRoundForward } from "react-icons/io"
import { FaRegClock } from "react-icons/fa"
import Banner from "./Banner"

const Posts = ({ posts: data, page, title }) => {
  const [posts, setPosts] = useState(data)

  const setBackToAll = () => {
    setPosts(data)
  }

  return (
    <>
      <PostSection className="posts">
        <Title title={title || "Latest Posts"} />

        <div className="section-center">
          {posts.map(post => {
            const { id, date, image, tag, title, description } = post

            return (
              <Wrapper key={id}>
                <div className="img">
                  <Image fluid={image.fluid} />
                </div>
                <div className="info">
                  <div className="hide">
                    <span className="category">{tag}</span>
                  </div>
                  <div className="hide">
                    <h3>{title}</h3>
                  </div>
                  <div className="underline"></div>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                  <Link to="/" className="link">
                    Continue Reading... <IoMdArrowRoundForward />
                  </Link>
                  <footer>
                    <span className="date">
                      <FaRegClock className="icon" />
                      {date}
                    </span>
                    <span>22 min read</span>
                  </footer>
                </div>
              </Wrapper>
            )
          })}
          <article>
            <Banner />
          </article>
        </div>
      </PostSection>
    </>
  )
}

const PostSection = styled.section`
  .posts {
    width: 85vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .posts-title {
    font-weight: 700;
    text-transform: uppercase;
    color: #e12d39;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 992px) {
    .posts {
      width: 92vw;
    }
  }
  @media screen and (min-width: 1170px) {
    .posts-center {
      display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 1rem;
    }
  }
`

const Wrapper = styled.article`
  margin-bottom: 3rem;

  .img {
    margin-bottom: 1rem;
    height: 17rem;
  }
`

export default Posts
