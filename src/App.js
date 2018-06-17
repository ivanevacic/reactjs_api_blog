import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

import Latest from "./components/BlogPosts/Latest.js";
import Technology from "./components/BlogPosts/Technology.js";
import Gaming from "./components/BlogPosts/Gaming.js";

import { Layout, Menu, Breadcrumb, Icon, Carousel } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">REST_API_BLOG_&_NEWS</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />Reddit News
                      </span>
                    }
                  >
                    <Menu.Item key="1">r/Croatia</Menu.Item>
                    <Menu.Item key="2">r/MMA</Menu.Item>
                    <Menu.Item key="3">r/trees</Menu.Item>
                    <Menu.Item key="4">r/classicwow</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="user" />Blog Posts
                      </span>
                    }
                  >
                    <Menu.Item key="5">
                      <Link to="/latest">Latest</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                      <Link to="/technology">Technology</Link>Technology
                    </Menu.Item>
                    <Menu.Item key="7">
                    <Link to="/gaming">Gaming</Link>Gaming</Menu.Item>
                    <Menu.Item key="8">Auto</Menu.Item>
                    <Menu.Item key="9">Entertainment</Menu.Item>
                    <Menu.Item key="10">Books</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="user" />TODO SOON
                      </span>
                    }
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Breadcrumb style={{ margin: "16px 0" }} />
                <Content
                  style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  <Carousel autoplay>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                  </Carousel>
                  <Route path="/latest" component={Latest} />
                  <Route path="/technology" component={Technology} />
                  <Route path="/gaming" component={Gaming} />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
