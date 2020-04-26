import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

/**
 * based on https://appleple.github.io/react-modal-video/
 * simple youtube viewer that closes when you click outside of the video.
 * Implemented in Home.js
 */

class ModalVideoPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true, //set false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="IRaycIhnl8o"
          onClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}
export default ModalVideoPopup;
