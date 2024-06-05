import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Quotes = () => {
    const testimonials = [
        {
          quote:
            "Without music, life would be a mistake.",
          name: "Friedrich Nietzsche",        
        },
        {
            quote:
              "The only true wisdom is in knowing you know nothing.",
            name: "Socrates",
        },
        {
            quote:
              "People who know little are usually great talkers, while men who know much say little.",
            name: "Jean-Jacques Rousseau",
        },
        {
            quote:
            "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
            name: "Lao Tzu"
        },
        {
            quote:
            "There is no way to happiness, happiness is the way.",
            name: "Lao Tzu"
        },
      ];
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default Quotes