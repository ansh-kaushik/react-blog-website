import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, err1 } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      {err1 && <p>{err1}</p>}
      {isPending && <div> Loading</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
