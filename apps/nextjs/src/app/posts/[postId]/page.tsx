export default ({ params }: { params: { postId: string } }) => (
  <div>My post with id {params.postId}</div>
);
