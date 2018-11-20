/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */
import edit from "./main/edit";
import save from "./main/save";
// import singleEdit from "./child/singleEdit";
// import singleSave from "./child/singleSave";
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {InnerBlocks, InspectorControls, BlockAlignmentToolbar, RichText, BlockControls, AlignmentToolbar, BlockToolbar, BlockIcon} = wp.editor;
const {Fragment} = wp.element;
/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType('block-slider/block-slider', {
    /**
     * This is the display title for your block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
    title: __('Block Slider'),

    /**
     * Blocks are grouped into categories to help users browse and discover them.
     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
     */
    category: 'common',
    /**
     * Optional block extended support features.
     */
    supports: {
        // Removes support for an HTML mode.
        align: [ 'wide', 'full' ],
        html: false,
    
    },


    attributes: {
        slideCount: {
            type: 'number',
            default: 3,
        },
        width: {
            type: "number",
            default: 350
        },
        height: {
            type: "string",
            default: "300   "
        },
        arrow: {
            type: "bool",
            default: true
        },
        dots: {
            type: "bool",
            default: true
        },
    },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    edit,

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into `post_content`.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
     *
     * @return {Element}       Element to render.
     */
    save,
});

registerBlockType("block-slider/block-single-slide",{
    title:__("Single slide"),

    category:"common",
    attributes: {
        id: {
            type: 'number',
            default: 1,
        },
    },

    supports:{
        inserter: false,
        reusable: false,
        html: false,
    
    },
    getEditWrapperProps( attributes ) {
        return { 'data-tab': attributes.id };
    },
    edit:(props)=>{
        const { attributes: { id } } = props;
        return <Fragment><div className="swiper-slide" key={`single-slide-${id}`}><InnerBlocks templateLock={ false } /></div></Fragment>;
    },
    save:(props)=>{
        const { attributes: { id } } = props;
        return <div className="swiper-slide" key={`single-slide-${id}`}><InnerBlocks.Content /></div>;
    },
    parent:['block-slider/block-slider']
});
