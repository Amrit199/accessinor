const post = {
  name: "post",
  title: "posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title" },
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: 'image'}
    ],
    },
  ],
};

export default post;
