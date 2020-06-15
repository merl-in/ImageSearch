
import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }; // Initialising state for spans styling for image size in rows

// The Ref system is a way to get a handle on JSX props (as in <img /> below) as the props are not properly in the DOM at this point 
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
//  Callbacks have to be bound this one is bound with an arrow function
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // Actual image height divided by row height (set in css), Math.ceil() is to round the number up to give optimal space. Gives number of rows the image height takes up
    
    this.setState({ spans }); // Setting const spans (number of rows for the image height) to the property in state, so that it can be applied in inline style when rendered (below) 
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
        ref={this.imageRef}
        alt={description}
        src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard;