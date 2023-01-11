import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Michael Drew",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/332612/pexels-photo-332612.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "lazy dayz",
      img: "https://images.pexels.com/photos/2742261/pexels-photo-2742261.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Nancy Webber",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Looks like fun",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
