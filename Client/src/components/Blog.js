import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <div className="feedback">
        <h4>Our Blog</h4>
        <h1>Latest Blog & Articles</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="blogs">
        <div className="blog">
          <img src="images/jogging.jpg" alt="" />
          <h3>Explaining How Stress Makes You Sick You Need To Know</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna...
          </p>
          <h5>Read more</h5>
          <i className="fas fa-arrow"></i>
          {/* <div>
                  </div> */}
        </div>
        <div className="blog">
          <img src="images/jogging.jpg" alt="" />
          <h3>Walking Health Benefits That Everyone Must Know</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <h5>Read more</h5>
          <i className="fas fa-arrow"></i>
        </div>
        <div className="blog">
          <img src="/images/jogging.jpg" alt="" />
          <h3>How To Decrease The Level Of Adipose in the Body</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <h5>Read more</h5>
          <i className="fas fa-arrow"></i>
        </div>
      </div>
    </div>
  );
}

export default Blog;
