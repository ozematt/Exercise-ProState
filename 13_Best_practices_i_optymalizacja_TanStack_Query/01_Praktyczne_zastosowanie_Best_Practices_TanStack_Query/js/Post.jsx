export const Post = ({ post }) => {
  return (
    <>
      <li>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </li>
    </>
  );
};
