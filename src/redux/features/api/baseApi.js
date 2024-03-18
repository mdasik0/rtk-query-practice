import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getPostsById: builder.query({
      query: () => `/posts/${1}`
    }),
    setPosts: builder.mutation({
      query: (post) => ({
        url: "/posts", 
        method: "POST",
        body: post
      })
    })
  }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery, useSetPostsMutation } = baseApi;

export default baseApi;
