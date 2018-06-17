import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";

export default class Latest extends Component {
  state = {
    latest: []
  };

  componentDidMount() {
    axios
      .get("http://localhost/PHP_REST_BLOG/api/post/read_all_posts.php")
      .then(res => {
        console.log(res.data);
        this.setState({ latest: res.data.data });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.latest.map(latest => (
            <Card
              title={latest.title}
              bordered={false}
              style={{ background: '#c8f6f3', padding: '30px', marginBottom: '50px', marginTop: '50px' }}
            >
              <p>{latest.body}</p>
              <p>Author:{latest.author}</p>
              <p>Category:{latest.category_name}</p>
            </Card>
          ))}
        </ul>
      </div>
    );
  }
}
