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
        return <Fragment>
            <div className="swiper-container">
                <div className="swiper-wrapper">

                    <InnerBlocks.Content/>
                    {attributes.dots && <div className="swiper-pagination"></div>}

                    {attributes.arrow && <Fragment>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Fragment>}
                </div>

            </div>
            ,
            <script>
                /* <![CDATA[

                new Swiper('.swiper-wrapper > .editor-inner-blocks', {
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
                setWrapperSize: true,
            })
                 ]]> */
            </script>
        </Fragment>;
    }
}