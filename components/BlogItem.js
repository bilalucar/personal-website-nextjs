import React from 'react';
import Link from 'next/link';
import { timeConverter } from '../helpers/utils/timeConverter';

function BlogItem(props) {
  const { title, created, author, summary, url } = props.item;
  return (
    <div className="row justify-content-end mb-5 blog-item">
      <div
        className="col-12 col-lg-8 blog-item__content wow fadeInUp animated"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <Link href={`/blog/${url}`}>
          <a>
            <h4 className="blog-item__title">{title}</h4>
          </a>
        </Link>
        <div className="blog-item__meta">
          {author}, {timeConverter(created._seconds)}
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default BlogItem;
