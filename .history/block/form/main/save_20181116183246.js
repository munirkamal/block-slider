const {__} = wp.i18n;
const {Component, Fragment} = wp.element;
const {InnerBlocks} = wp.editor;

export default class extends Component {
    constructor(props) {
        super(...arguments);
        this.props = props;
    }

    render() {
        const {attributes, setAttributes, className} = this.props;
        return <div className="swiper-container">
        <div className="swiper-wrapper">

            <InnerBlocks.Content/>
            {attributes.dots && <div className="swiper-pagination"></div>}

            {attributes.arrow && <Fragment>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Fragment>}
        </div>

    </div>
    ;
    }
}