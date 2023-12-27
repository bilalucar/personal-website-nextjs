'use client';

import portfolioDetail from '@/mocks/portfolio-detail';

const PortfolyoDetail = ({ params }: { params: { id: string } }) => {
  return portfolioDetail(params.id);
};

export default PortfolyoDetail;
