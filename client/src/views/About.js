import React, { Component } from "react";
import "../CSS/webevents-main.css";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "About",
    };
  }

  render() {
    return (
      <div id="MainBody">
        <div class="intro-banner img-cont">
          <img
            class="object-fit_cover"
            src="Banner4.jpg"
            alt="home-major-1"
          />
        </div>

        <div class="MainBody-inner">
          <h1>About US</h1>
          <h4>
            Nate Zajac: Team Captain, Editor, Frontend Support <br />
            Steven Edwards: coordinates with customer, Frontend Support <br />
            Justin Greer: Editor, Optimist <br />
            Luke Whittle: Editor, Full-Stack Support <br />
            Lam Nguyen (Spring Semester): Visual Support, Editor <br />
            <br />
          </h4>
          <p>
            We are a group of five seniors studying Computer Science, Computer
            Engineering and Computer Information Systems at the University of
            South Carolina. We have created an app that will provide an optimal
            schedule for event attendees based on their mutual preferences for
            dates and times. The app user would be the event organizer. Our app
            will have a web-page take an input of an excel file that has
            scheduling preferences and output a schedule that has scheduled
            clients based on their preferences. The target audience is event
            organizers who need to schedule a lot of people in a set period of
            time while attempting to make event speakers happy with their
            scheduled times.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
