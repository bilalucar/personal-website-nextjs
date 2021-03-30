import Layout from '../../components/Layout';
import React from 'react';
import { useRouter } from 'next/router';
import portfolioDetail from '../../mocks/portfolio-detail';

export default function PortfolyoDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>{portfolioDetail(id)}</Layout>;
}
