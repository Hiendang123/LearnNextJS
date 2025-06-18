'use client';

import React from 'react';
import { useParams } from 'next/navigation';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const params = useParams();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {params.postId}</p>
    </div>
  );
}
