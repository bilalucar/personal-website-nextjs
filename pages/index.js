import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="container py-5">
        <div className="row">
          <div
            className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0s"
          >
            <h1 className="home__logo" style={{ backgroundImage: `url(/images/logo.jpg` }}>
              Front-end, JavaScript Developer - Bilal Uçar
            </h1>
          </div>
          <div
            className="col-12 col-md-8 wow fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <p>Merhaba,</p>

            <p>
              Ben Bilal Uçar. sahibinden.com 'da Sr. Front-end Developer olarak çalışıyorum. Yaptığım
              projelerin insanlar tarafından sevilip kullanıldığını görmek en büyük motivasyon kaynağım.
            </p>

            <p>Çalıştığım bazı firma ve projeler:</p>
          </div>
        </div>
      </section>
      <section
        className="container-fluid wow fadeInUp animated"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="row home__work">
          <a href="/portfolyo/" className="home__work__item">
            <img className="img-fluid" src="/images/sahibinden.png" alt="Sahibinden.com" />
            <span>Detaylar</span>
          </a>
          <a href="/portfolyo/" className="home__work__item">
            <img className="img-fluid" src="/images/gittigidiyor.png" alt="GittiGidiyor Logo" />
            <span>Detaylar</span>
          </a>
          <a href="/portfolyo/testinium#testinium" className="home__work__item">
            <img className="img-fluid" src="/images/testinium.png" alt="Testinium Logo" />
            <span>Detaylar</span>
          </a>
          <a href="/portfolyo/teknovol" className="home__work__item">
            <img className="img-fluid" src="/images/teknovol.png" alt="Teknovol Logo" />
            <span>Detaylar</span>
          </a>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3
              className="home__title wow fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              Yeteneklerim
            </h3>
          </div>
          <div
            className="col-12 col-md-8 wow fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <h4>Front-end Development</h4>
            <p>
              Güncel teknolojileri kullanarak geliştirme yapıyorum ve en basit yöntemle karmaşık
              problemleri çözmeye çalışıyorum. Güncel teknolojileri deniyorum ve diğer
              teknolojilerle arasındaki performans ve kullanım farklarıyla ilgileniyorum. Temiz kod
              yazmayı seviyorum. Bir projenin düzenli yürümesi için Agile yaklaşımlarının
              uygulanması taraftarıyım.
            </p>
            <div className="row -small">
              <div className="col-12">
                <p className="home__list-title bold">Yeteneklerim</p>
                <p className="home__tags">
                  <span>#Angular</span>
                  <span>#JavaScript</span>
                  <span>#TypeScript</span>
                  <span>#ES6</span>
                  <span>#HTML5</span>
                  <span>#CSS</span>
                  <span>#SCSS</span>
                  <span>#Bootstrap</span>
                  <span>#jQuery</span>
                  <span>#NextJS</span>
                  <span>#React</span>
                  <span>#WordPress</span>
                  <span>#Git</span>
                  <span>#JIRA</span>
                  <span>#Agile & Scrum</span>
                </p>
              </div>
            </div>
            <div className="row -small">
              <div className="col-12">
                <p className="home__list-title bold">Kullandığım Yazılımlar</p>
                <p className="home__tags">
                  <span>#MacOS</span>
                  <span>#Apple Mail</span>
                  <span>#Webstorm</span>
                  <span>#Google Chrome</span>
                  <span>#Safari</span>
                  <span>#Postman</span>
                  <span>#Teams</span>
                  <span>#Slack</span>
                  <span>#Telegram</span>
                  <span>#WhatsApp</span>
                  <span>#Spotify</span>
                  <span>#GitHub</span>
                  <span>#GitLab</span>
                  <span>#Zsh</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3
              className="home__title wow fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              Hakkımda
            </h3>
          </div>
          <div
            className="col-12 col-md-8 wow fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <p>
              İlkokul 'da babamın eve bilgisayar almasıyla birlikte büyüklerin her bayram sorduğu o
              standart soru olan "Büyüyünce ne olmak istiyorsun?" sorusuna yanıt bulmuştum.
              Bilgisayar başında saatlerce vakit geçirip sıkılmadan ücretsiz web siteleri açıp hazır
              HTML kodlarını yapıştırarak kendimce web sitesi tasarlıyordum.
            </p>

            <p>
              Lisede biraz daha ilerletip WordPress, Blogger gibi platformlarla çalıştım. HTML, CSS
              JavaScript ve PHP ile hazır tasarımlar ve kodlar üzerinden değişiklikler yaparak öğrenmeye devam ettim.
            </p>

            <p>
              Üniversiteyi Süleyman Demirel Üniversitesi, Bilgisayar Mühendisliği bölümünde okudum.
              Burada farklı programlama dilleri ve teknolojilerle çalıştım. Üniversite okurken
              sektörle alakalı farklı eğitimlere ve etkinliklere katılmaya özen gösterdim.{' '}
            </p>

            <p>
              Üniversiteye devam ederken Isparta 'da TEKNOVOL adında bir dijital ajansta part-time
              olarak çalıştım. TEKNOVOL 'de WordPress başta olmak üzere HTML, CSS, JS, SEO
              alanlarında çalıştım. Çalışmalarımdan öğrendiklerimi bu ajansın bir projesi olan&nbsp;
              <a href="https://webmaster.kitchen/author/bilal">webmaster.kitchen</a>&nbsp; 'de
              makale olarak yazdım. Web ile ilgili konularda aylık toplantıların yapıldığı, yeni
              teknolojilerin konuşulduğu Webmaster Meetup 'lar düzenledik. Aktif olarak organizatör
              görevi üstlendim.
            </p>

            <p>
              Üniversite bittikten sonra staj yaptığım yer olan, Testinium 'da çalışmaya başladım.
              Angular, React, Webpack, SCSS, ES6 gibi teknolojilerle çalıştım. Testinium, Loadium,
              QA Dashboard gibi SaaS ürünlerinin geliştirilmesinde etkin rol oynadım.
            </p>

            <p>
              Testinium 'da yaklaşık 2 yıl çalıştıktan sonra GittiGidiyor ile e-ticaret sektörüne geçtim.
              GittiGidiyor'da Next JS, React, GraphQL, Styled Components, Jest, Storybook gibi teknolojilerle tanıştım.
              Bunun dışında Docker, kubernetes gibi konularda temel bilgi sahibi oldum.
            </p>

            <p>Yaklaşık 1 yıl sonrasında sahibinden.com 'da ödeme domaininde çalışmaya başladım.
              Şu anda sahibinden.com 'da Sr. Front-end Developer olarak çalışmaktayım.</p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3
              className="home__title wow fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              İletişim
            </h3>
          </div>
          <div
            className="col-12 col-md-8 wow fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <p>
              Sizlerle iletişim halinde olmayı, projelerinize katkı sağlamayı ve işbirliği yapmayı çok önemsiyorum.
              Aşağıdaki kanalları kullanarak projeleriniz hakkında bilgi alabilir, fikirlerinizi paylaşabilir veya işbirliği önerisinde bulunabilirsiniz.
            </p>
            <p>
              <a href="mailto:ucarbilal@outlook.com">ucarbilal@outlook.com</a>
            </p>
            <p>
              <a href="tel:+905398651530" className="bold">
                +90 539 865 1530
              </a>
            </p>
            <p>Yenişehir/MERSİN</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
