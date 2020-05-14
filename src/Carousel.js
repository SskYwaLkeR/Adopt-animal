import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large); //array of string with urls
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="Animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // error cuz img (non click thing has an onClick ) so at least have an on key event for accessbility
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === "active" ? "active" : ""}
              alt="Animal "
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
