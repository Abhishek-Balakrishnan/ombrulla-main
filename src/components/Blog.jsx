const posts = [
    {
      title: 'Privacy and security concerns with Artificial Intelligence',
      href: '#',
      category: { imageUrl: 'blog-1.webp', href: '#', color: 'rounded-lg	' },
      description:
        'Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be ...',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
        name: 'Paul York',
        href: '#',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcAGl6MERiuoxTUbPVp0EMaTkxuukfb7WNPGvnJ6wokg8oIvMlKW8WxYo0-bJ9y1chf0&usqp=CAU',
      },
      readingTime: '6 min',
    },
    {
      title: 'The impact of AI on jobs and the workforce',
      href: '#',
      category: {imageUrl: 'blog-2.webp', href: '#', color: 'rounded-lg ' },
      description:
        'The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities...',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      author: {
        name: 'Dessie Ryan',
        href: '#',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUtHzWNQE2FDoDrR_dYBqr-h-k9vO9b1kAA&usqp=CAU',
      },
      readingTime: '4 min',
    },
    {
      title: 'Bias and fairness in Artificial Intelligence',
      href: '#',
      category: { imageUrl: 'blog-3.webp', href: '#', color: 'rounded-lg' },
      description: 'Bias and fairness are important considerations in AI, as they can significantly impact the accuracy and effectiveness of AI systems, as well as the social and ethical implications of their use...',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
      },
      readingTime: '11 min',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className=" px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="text-center  	">
          <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" class="w-3 h-3 mt-1">
      <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
    </svg>
              <h3 className="text-center text-sm font-medium mt- font-sans mb-[1.125rem] p- mx-2	">BLOG UPDATES</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" class="w-3 h-3 mt-1">
      <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clip-rule="evenodd" />
    </svg>
    </div>
            <h2 className="text-5xl font-medium text-center  font-sans tracking-tight mb-[1.125rem] ">To Read</h2>
            
          </div>
          <div className=" mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title} className="bg-white p-5 rounded-lg">
                <div className="inline-block">
  <span className="inline-flex items-center px-3 py-0.5 rounded-lg text-sm font-medium">
    <div className="w- h- overflow-hidden rounded-lg">
      <img src={post.category.imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
  </span>
</div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-15 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  