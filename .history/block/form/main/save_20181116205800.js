const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.editor;

// export default ({ attributes, className }) => {
//   componentDidMount () {
//         const script = document.createElement("script");

//         script.src = "https://use.typekit.net/foobar.js";
//         script.async = true;

//         document.body.appendChild(script);
//     }
//   return (
//     <Fragment>
//       <div
//         className="swiper-container"
//       >
//         <div
//           className="swiper-wrapper"
//         >
//           <InnerBlocks.Content />
//         </div>
//         {attributes.dots && <div className="swiper-pagination" />}

//         {attributes.arrow && (
//           <Fragment>
//             <div className="swiper-button-next" />
//             <div className="swiper-button-prev" />
//           </Fragment>
//         )}
//       </div>
//       <script>
//         window.swiperContainer = {
//             width: attributes.width,
//             height: attributes.height
//         };
//       </script>
//     </Fragment>
//   );
// };
export default class extends Component {
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.options = {
			width: props.attributes.width,
			height: props.attributes.height
		};
  }

  render() {
    const { attributes, setAttributes, className } = this.props;
    //const manualAttr = { height: attributes.height, width: attributes.width };
    
    return (
      <Fragment>
        <div className="swiper-container" data-height={attributes.height} data-width={attributes.width}>
          <div className="swiper-wrapper" data-options={JSON.stringify(this.options)}>
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
