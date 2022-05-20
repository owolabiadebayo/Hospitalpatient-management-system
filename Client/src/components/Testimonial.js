import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <div className="feedback">
          <h4>Patients Feedback</h4>
          <h1>Positive Feedback From Our Patients</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="maps">
          <div className="map">
            <div className="map-position">
              <img src="/images/three.jpg" alt="" className="map-img one" />
              <img src="/images/one.jpg" alt="" className="map-img two" />
              <img src="/images/two.jpg" alt="" className="map-img three" />
              <img src="/images/two.jpg" alt="" className="map-img four" />
              <img src="/images/one.jpg" alt="" className="map-img five" />
              <img src="/images/three.jpg" alt="" className="map-img six" />
            </div>
          </div>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div className="div1">
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>

          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
          <div>
            <img src="/images/testimonial-YV9ABZR.png" alt="text" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
