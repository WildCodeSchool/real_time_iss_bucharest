import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const gutter = 2;
const Gallery = (props) => (
  <div
    css={{
      overflow: 'hidden',
      marginLeft: -gutter,
      marginRight: -gutter,
    }}
    {...props}
  />
);

const Image = (props) => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: gutter,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${gutter * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);

const images = [{ src: require('../assets/carousel/picture 1.jpg') },
{ src: require('../assets/carousel/picture 2.jpg') },
{ src: require('../assets/carousel/picture 3.jpg') },
{ src: require('../assets/carousel/picture 4.jpg') },
{ src: require('../assets/carousel/picture 5.jpg') },
{ src: require('../assets/carousel/picture 6.jpg') },
{ src: require('../assets/carousel/picture 7.jpg') },
{ src: require('../assets/carousel/picture_8.jpg') },];

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedIndex: 0
    }
  }
  // state = { modalIsOpen: false }

  toggleModal(j) {
    this.setState({ modalIsOpen: !this.state.modalIsOpen, selectedIndex: j });
  }
  render() {
    const { modalIsOpen, selectedIndex } = this.state;

    return (
      <div>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={() => this.toggleModal(0)}>
              <Carousel views={images} currentIndex={selectedIndex} />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className={'wrapperCarousel'}>
          <Gallery className={'containerCarousel'}>
            {images.map(({ src }, j) => (
              <Image onClick={() => this.toggleModal(j)} className='imageCarousel'>
                <img
                  className={'imageCarousel'}
                  alt={"asdad"}
                  src={src}
                  css={{
                    cursor: 'pointer',
                    position: 'absolute',
                    maxWidth: '100%',
                  }}
                />
              </Image>
            ))}
          </Gallery>
        </div>
      </div>
    );
  }
}

export default Component