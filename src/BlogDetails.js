import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//  dont use curly braces when there is default export
// import { useFetch } from './useFetch';
import useFetch from './useFetch';
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  //   const { data: blog, isPending, isErr } = useFetch('http://localhost:3000/blogs'+ id);
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div> Loading...</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
