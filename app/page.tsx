import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ryan Nealeigh
      </h1>
      <p className="mb-4">
        I'm a coffee enthusiast and fountain pen aficionado, currently working at <a href="https://amazon.com">Amazon</a>,
        where I design and build flexible APIs and backend services that improve data accessibility, streamline complex
        processes, and empower developers across diverse projects. Outside of work, I’m often experimenting with pour-over
        coffee, meticulously weighing beans and fine-tuning each cup. I also enjoy writing and organizing thoughts in my
        Leuchtturm1917 notebook with a Hongdian fountain pen. A huge science fiction and fantasy fan, I love getting lost in worlds like <em>The Lord of the Rings</em>, <em>The Cosmere</em>, <em>The Expanse</em>, and the <em>Halo</em> novel series.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
