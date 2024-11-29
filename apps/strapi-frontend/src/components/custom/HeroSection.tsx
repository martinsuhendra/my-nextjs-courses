import { getStrapiMedia } from '@/lib/utils'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  description: string
  imageUrl: string | null
}

export default function HeroSection({
  title,
  description,
  imageUrl,
}: HeroSectionProps) {
  const heroImage = getStrapiMedia(imageUrl) || 'https://placehold.co/1024x480'

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Elevate your projects</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {title}
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">{description}</p>
              </div>
              <div className="mt-10 relative max-w-5xl mx-auto">
                <Image
                  src={heroImage}
                  width={1024}
                  height={768}
                  className="rounded-xl"
                  alt="Image Description"
                />
                <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                  <div className="w-48 h-48 rounded-lg bg-background/10" />
                </div>
                <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                  <div className="w-48 h-48 rounded-full bg-background/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  )
}
