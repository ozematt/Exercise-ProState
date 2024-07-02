const fetchPosts = async (page = 1, perPage = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=${perPage}`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const PostsList = () => {
  // Stwórz stan dla aktualnej strony
  // Użyj useQuery do pobrania postów z API

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {/* Przyciski nawigacji */}
    </div>
  );
};
