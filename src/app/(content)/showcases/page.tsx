import { allShowcasePosts } from "contentlayer/generated";
import Image from "next/image";

import { calculateReadingTime } from "~/app/(content)/utils";

const ShowcasePostPage = () => {
  return (
    <>
      <main className="mx-auto w-full px-4 pt-8 lg:max-w-7xl">
        <h1 className="my-12 text-center text-6xl font-semibold text-sand-12">
          Showcases
        </h1>
        <Showcases />
      </main>
    </>
  );
};

export default ShowcasePostPage;

const Showcases = () => {
  const post = allShowcasePosts;

  return (
    <section className="bg-sand-2">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-20">
        <ol
          className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
          role="list"
        >
          {post.map((post) => (
            <li
              className="space-y-3 bg-sand-1 px-3 py-2.5 lg:px-6  lg:py-5"
              key={post._id}
            >
              <a className="group" href={post.slug}>
                <div>
                  <div className="py-3">
                    <div className="block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <Image
                            alt={post.author}
                            className="inline-block h-9 w-9 rounded-xl object-cover"
                            width={40}
                            height={40}
                            src={post?.authorImg}
                          />
                        </div>
                        <div className="ml-3 flex w-full justify-between">
                          <p className="text-sm text-sand-12 group-hover:text-blue-500">
                            {post.author}
                          </p>
                          <span className="text-sand-9">4 days ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-medium leading-6 text-sand-12">
                    {post.title}
                  </h3>
                </div>
                <p className="line-clamp-3 mt-5 text-base text-gray-500">
                  {post.summary}
                </p>
                <div className="py-3">
                  <div>
                    <div className="inline-flex w-full items-center justify-between">
                      <div>
                        <p className="text-sm text-sand-12 group-hover:text-blue-500">
                          {calculateReadingTime(post.body.raw)} min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
