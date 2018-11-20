const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

export default class extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.flickityOptions = {
			autoPlay: autoPlay && autoPlaySpeed ? autoPlaySpeed : false,
			draggable: draggable,
			pageDots: pageDots,
			prevNextButtons: prevNextButtons,
			wrapAround: true,
			arrowShape: {
				x0: 10,
				x1: 60, y1: 50,
				x2: 65, y2: 45,
				x3: 20
			},
		};
  }

  render() {
    const { attributes, setAttributes, className } = this.props;
    //const manualAttr = { height: attributes.height, width: attributes.width };
    return (
      <Fragment>
        <div className="swiper-container" data-height={attributes.height} data-width={attributes.width}>
          <div className="swiper-wrapper">
            <InnerBlocks.Content />
          </div>
          {attributes.dots && <div className="swiper-pagination" />}

          {attributes.arrow && (
            <Fragment>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </Fragment>
          )}
        </div>
        
      </Fragment>
    );
  }
}
