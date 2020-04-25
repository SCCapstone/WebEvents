import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

/**
 * based on https://appleple.github.io/react-modal-video/
 *
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
