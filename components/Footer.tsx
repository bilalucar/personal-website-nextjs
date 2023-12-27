'use client';

const Footer = () => {
  return (
    <footer
      className="container pt-5 wow fadeInUp animated"
      data-wow-duration="1s"
      data-wow-delay="0.3s"
      style={{
        visibility: 'visible',
        animationDuration: '1s',
        animationDelay: '0.3s',
        animationName: 'fadeInUp',
      }}
    >
      <div className="row" id="contact">
        <div className="col-full">
          <div className="seperator" />
        </div>
        <div className="col-12 col-md-6">
          <p className="text-center text-md-start">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=905398651530&type=phone_number&app_absent=0"
              rel="nofollow"
            >
              WhatsApp
            </a>
            <span> • </span>
            <a target="_blank" href="https://github.com/bilalucar" rel="nofollow">
              GitHub
            </a>
            <span> • </span>
            <a target="_blank" href="https://www.linkedin.com/in/bilalucar" rel="nofollow">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="col-12 col-md-6">
          <p className="text-center text-md-end">
            Copyright © {new Date().getFullYear()} Bilal Uçar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
