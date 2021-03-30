import Layout from '../../components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import portfolioDetail from '../../mocks/portfolio-detail';
import Head from 'next/head';

export default function PortfolyoDetail() {
  const router = useRouter();
  const { id } = router.query;

  const portfolio = portfolioDetail(id);

  return (
    <Layout>
      <Head>
        <title>Portfolyo | Bilal Uçar - Front-end Developer | JavaScript</title>
      </Head>
      {portfolio}
    </Layout>
  );
}
