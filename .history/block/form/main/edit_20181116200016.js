const {__} = wp.i18n;
const {Component,Fragment} = wp.element;
const {PanelBody, TextControl, Dashicon, Toolbar, Button, Tooltip, ToggleControl} = wp.components;
const {withState} = wp.compose;
const {debounce} = lodash;
const {InnerBlocks, InspectorControls, BlockAlignmentToolbar, RichText, BlockControls, AlignmentToolbar, BlockToolbar, BlockIcon} = wp.editor;
const {times} = lodash;
import memoize from 'memize';

const getSingleSlideTemplate = memoize((singleSlide) => {
    return times(singleSlide, n => ["block-slider/block-single-slide", {id: n + 1}]);
});

const ALLOWED_BLOCKS = ['block-slider/block-single-slide'];

export default class extends Component {
    constructor(props) {
        super(...arguments);
        this.props = props;
        this.state = {
            data: []
        };
    }

    //
    componentDidUpdate() {
        console.log("Didupdate Munir")
        const {attributes, className, setAttributes} = this.props;
        const {singleSlide, slideCount} = attributes;
        window.mySwiper = new Swiper('.swiper-wrapper > .editor-inner-blocks', {
            // Optional parameters
            //direction: 'vertical',
            //loop: true,
            //observer: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // slidesPerView: 1,
            // slidesPerColumn: 1,
            // slidesPerColumnFill: 'column',
            // slidesPerGroup: 1,

            // autoplay: {
            //     delay: 500,
            //     disableOnInteraction: false,
            // },
            //autoHeight:true,

            width: attributes.width,
            height: attributes.height,
            //containerModifierClass:"editor-inner-blocks",
            wrapperClass:"editor-block-list__layout",
            slideClass:"editor-block-list__block",

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            initialSlide: slideCount.length - 1,
            //setWrapperSize: true,
        })

        //window.mySwiper.slideTo(this.state.data.length -1);


    }

    componentDidMount() {
        const {attributes} = this.props;
        console.log("Didmount")
        window.mySwiper = new Swiper('.swiper-wrapper > .editor-inner-blocks', {
            // Optional parameters
            //direction: 'vertical',
            //loop: true,
            //observer: true,
    
            // If we need pagination
            wrapperClass:"editor-block-list__layout",
            slideClass:"editor-block-list__block",
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            width: attributes.width,
            height: attributes.height,
    
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
    
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            initialSlide: 0,
            //setWrapperSize: true,
            //nested:true
        });
    }


    render() {
        const {attributes, className, setAttributes} = this.props;
        const {singleSlide, slideCount} = attributes;
//console.log(slideCount);
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <TextControl label={__("Width")} value={attributes.width}
                                     onChange={width => setAttributes({width})} />
                        <TextControl label={__("Height")} value={attributes.height}
                                     onChange={height => setAttributes({height})}/>
                        <ToggleControl label={__("Navigation")} checked={attributes.arrow}
                                       onChange={arrow => setAttributes({arrow})}/>
                        <ToggleControl label={__("Pagination")} checked={attributes.dots}
                                       onChange={dots => setAttributes({dots})}/>
                    </PanelBody>
                </InspectorControls>

                <BlockControls key="custom-controls">
                    <Toolbar>
                        <Tooltip text={__('Add Slide')}>
                            <Button
                                onClick={() => {
                                    setAttributes({slideCount: slideCount+1})
                                }}>
                                <BlockIcon icon="insert" showColors/>
                            </Button>
                        </Tooltip>
                    </Toolbar>
                </BlockControls>

                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        <InnerBlocks
                            template={getSingleSlideTemplate(slideCount)}
                            templateLock="all"
                            allowedBlocks={ALLOWED_BLOCKS}
                        />
                        {attributes.dots && <div className="swiper-pagination"></div>}

                        {attributes.arrow && <Fragment>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </Fragment>}
                    </div>

                </div>
            </Fragment>
        );
    }
}