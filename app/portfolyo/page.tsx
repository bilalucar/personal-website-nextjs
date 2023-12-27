'use client';

import { portfolioData } from '@/mocks/portfolio';
import Link from 'next/link';

const Portfolyo = () => {
  return portfolioData.map((section: any, index: any) => (
    <section className="container" key={`${index}-section`}>
      <div className="row pt-5 mt-5 mt-md-0">
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
      {section.data.map((item: any, index: any) => (
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
            className="col-12 col-md-8 wow fadeInUp animated portfolyo__item"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div>
              <p>
                <b>
                  {item.position} {item.date}
                </b>
              </p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
            {item.url && (
              <div className="portfolyo__read-more">
                <Link href={item.url}>Detaylar &gt;&gt;</Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  ));
};

export default Portfolyo;
