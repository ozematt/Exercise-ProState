export const PostsList = () => {
  const { isPending, data, isError, error } = useQuery({ queryKey: ['posts'], queryFn: fetchData });

  return (
    <>
      {isPending && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      <ol>
        {data.map((post) => (
          <li key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ol>
    </>
  );
};
