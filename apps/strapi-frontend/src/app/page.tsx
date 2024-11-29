'use client'
import HeroSection from '@/components/custom/HeroSection'
import { getHomepageData } from '@/strapi-api'
import { useQuery } from 'react-query'

export default function Home() {
  const { data } = useQuery('homepage', getHomepageData)
  const heroImage = data?.data?.blocks?.[0]?.image?.url || null

  return (
    <div className="container mx-auto">
      <HeroSection
        title={data?.data.title}
        description={data?.data.description}
        imageUrl={heroImage}
      />
    </div>
  )
}
