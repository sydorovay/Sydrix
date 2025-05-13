const BlogPage = ({ t }) => {
  return (
    <main>
      <h1>{t?.blog|| 'Blog'}</h1>
      <p>{t?.blogText || 'Here you can learn more about this project.'}</p>
    </main>
  );
};

export default BlogPage;
