import Layout from '../components/Layout';
import Link from 'next/link';
import React from 'react';
import { portfolioData } from '../mocks/portfolio';

export default function Portfolyo() {
  return (
    <Layout>
      {portfolioData.map((section, index) => (
        <section className="container" key={`${index}-section`}>
          <div className="row pt-5">
            <div className="col-12">
              <h3
                className="home__title wow fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                {section.title}
              </h3>
            </div>
          </div>
          {section.data.map((item, index) => (
            <div className="row py-4" key={`${index}${section.title}`}>
              <div
                className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div>
                  <img className="img-fluid" src={item.img.src} alt={item.img.alt} />
                </div>
              </div>
              <div
                className="col-12 col-md-8 wow fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
              >
                <div className="portfolyo__item-content">
                  <p>
                    <b>{item.position}</b>
                  </p>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                  {item.url && (
                    <div className="portfolyo__read-more">
                      <Link href={item.url}>
                        <a>Detaylar >></a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </Layout>
  );
}
