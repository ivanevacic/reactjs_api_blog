import React, { Component } from 'react'
import axios from 'axios'

export default class BlogPosts extends Component {
    state = {
        blog_posts: [],
    };

    componentDidMount() {
        axios.get('http://localhost/PHP_REST_BLOG/api/post/read_all_posts.php')
                .then(res => {
                    console.log(res.data);
                        this.setState({ blog_posts: res.data.data });
                });
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.blog_posts.map(blog_post => <li>{blog_post.body}</li>)}
        </ul>
      </div>
    )
  }
}
