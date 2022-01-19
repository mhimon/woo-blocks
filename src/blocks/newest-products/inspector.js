const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
	BaseControl,
	Dropdown,
	Button,
	ButtonGroup,
	TabPanel
} = wp.components;
const { __ } = wp.i18n;

// const { useState } = wp.element;
import classnames from 'classnames';


const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		columns,
		rows,
		categories,
		conVisibility,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Rows', 'woo-blocks' ) }
			>
				<RangeControl
					label={ __( 'Columns', 'woo-blocks' ) }
					value={ columns }
					onChange={ ( value ) => setAttributes( { columns: value } ) }
					min={ 1 }
					max={ 6 }
				/>
				<RangeControl
					label={ __( 'Rows', 'woo-blocks' ) }
					value={ rows }
					onChange={ ( value ) => setAttributes( { rows: value } ) }
					min={ 1 }
					max={ 6 }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Content', 'woo-blocks' ) }
			>
				<ToggleControl
					label={ __( 'Product Title', 'woo-blocks' ) }
					help={
						conVisibility.title
							? 'Product title is visible.'
							: 'Product title is hidden.'
					}
					checked={ conVisibility.title }
					onChange={ ( c ) => {
						setAttributes( { conVisibility: { ...conVisibility, title: c } } );
					} }
				/>
				<ToggleControl
					label={ __( 'Product Price', 'woo-blocks' ) }
					help={
						conVisibility.price
							? 'Product price is visible.'
							: 'Product price is hidden.'
					}
					checked={ conVisibility.price }
					onChange={ ( c ) => {
						setAttributes( { conVisibility: { ...conVisibility, price: c } } );
					} }
				/>
				<ToggleControl
					label={ __( 'Product Rating', 'woo-blocks' ) }
					help={
						conVisibility.rating
							? 'Product rating is visible.'
							: 'Product rating is hidden.'
					}
					checked={ conVisibility.rating }
					onChange={ ( c ) => {
						setAttributes( { conVisibility: { ...conVisibility, rating: c } } );
					} }
				/>
				<ToggleControl
					label={ __( 'Add to cart button', 'woo-blocks' ) }
					help={
						conVisibility.button
							? 'Add to cart button is visible.'
							: 'Add to cart button is hidden.'
					}
					checked={ conVisibility.button }
					onChange={ ( c ) => {
						setAttributes( { conVisibility: { ...conVisibility, button: c } } );
					} }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
