import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Title from "./Title"
import Banner from "./Banner"
import Post from "./Post"

const Posts = ({ posts: data, page, title }) => {
  const [posts, setPosts] = useState(data)

  return (
    <>
      <PostSection className="posts">
        <Title title={title || "Latest Posts"} />

        <div className="posts-center">
          <article>
            {posts.map(post => {
              return <Post page={page} key={post.id} {...post} />
            })}
            {!page && (
              <ButtonDiv>
                <button>
                  <Link to="/posts" className="btn">
                    All Posts
                  </Link>
                </button>
              </ButtonDiv>
            )}
            {page && (
              <ButtonDiv>
                <button>
                  <Link to="/" className="btn">
                    Back Home
                  </Link>
                </button>
              </ButtonDiv>
            )}
          </article>
          <article>
            <Banner />
          </article>
        </div>
      </PostSection>
    </>
  )
}

const ButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  button {
    text-transform: uppercase;
    border: none;
    outline: none;
    border-radius: var(--radius);
    background: var(--clr-primary-5);
    padding: 0.9rem 0.75rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 0.875rem;
      padding: 0.9rem 0.75rem;
    }
  }
  button:hover {
    background: var(--clr-primary-6);
  }
`

const PostSection = styled.section`
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 4rem;

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

export default Posts
