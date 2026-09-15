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
    <section className="relative flex flex-col items-center overflow-hidden bg-black py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Words I Live By</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Quotes</h2>
      </div>
      <div className="mt-10 w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  )
}

export default Quotes
