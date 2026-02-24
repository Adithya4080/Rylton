import { notFound } from 'next/navigation';
import { scooterModels } from '../../../data/data';
import ModelDetailClient from './Modeldetailclient';

export default async function ModelDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const scooter = scooterModels.find((s) => s.slug === slug);
  
  if (!scooter) {
    notFound();
  }

  return <ModelDetailClient scooter={scooter} />;
}