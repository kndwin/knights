import { allShowcasePosts } from "contentlayer/generated";

import { Breadcrumb, getBreadcrumbs } from "~/ui";

import { Mdx } from "~/app/(content)/components";

type ShowcasePostPage = {
  params: {
    slug: string[];
  };
};

export function generateStaticParams(): ShowcasePostPage["params"][] {
  return allShowcasePosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

function getPostFromParams(params: ShowcasePostPage["params"]) {
  const slug = params?.slug?.join("/");
  const post = allShowcasePosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

const ShowcasePostPage = ({ params }: ShowcasePostPage) => {
  const post = getPostFromParams(params);

  return (
    <>
      <Breadcrumb items={getBreadcrumbs(post?.slug as string)} />
      <div className="prose prose-gray mx-auto w-fit">
        <Mdx code={post?.body.code as string} />
      </div>
    </>
  );
};

export default ShowcasePostPage;
