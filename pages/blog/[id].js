import Layout from '../../components/Layout';
import React from 'react';
import { timeConverter } from '../../helpers/utils/timeConverter';
import { getPost } from '../../api/posts';

function BlogDetail({ post }) {
  return (
    <Layout>
      <section className={`container py-5 blog-detail ${!post ? 'skeleton' : ''}`}>
        <div className="row">
          <div className="col-12">
            <h1 className="blog-detail__title">{post?.title}</h1>
            <div className="blog-detail__meta">
              <img
                className="blog-detail__avatar"
                src={post?.authorInfo?.avatar}
                alt={post?.authorInfo?.fullName}
              />
              <div>
                <div className="blog-detail__meta-item">{post?.authorInfo?.fullName}</div>
                <div className="blog-detail__meta-item">
                  {timeConverter(post?.created?._seconds)}
                </div>
              </div>
            </div>
            <p className="blog-detail__summary">{post?.summary}</p>
            <div className="blog-detail__image">
              <img src={post?.featuredImage} alt={post?.title} className="img-fluid" />
            </div>
            <div
              className="blog-detail__content"
              dangerouslySetInnerHTML={{ __html: post?.content }}
            />
            <div className="blog-detail__tag-box">
              <div className="blog-detail__tag-text">Etiketler:</div>
              {post?.tags?.map(item => (
                <span className="blog-detail__tag" key={item}>
                  #{item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const res = await getPost(query.id);
  const response = await res.json();

  if (!response.data?.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response.data,
    },
  };
}

export default BlogDetail;
