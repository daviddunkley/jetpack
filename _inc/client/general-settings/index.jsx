/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoldableCard from 'components/foldable-card';
import Settings from 'components/settings';

/**
 * Internal dependencies
 */
import ConnectionSettings from './connection-settings';
import { disconnectSite } from 'state/connection';

const GeneralSettings = React.createClass( {
	render() {
		return(
			<div>
				<FoldableCard
					header="Jetpack Add-ons"
					subheader="Manage your Jetpack account and premium add-ons."
				>
					settings
				</FoldableCard>
				<FoldableCard
					header="Jetpack Connection Settings"
					subheader="Manage your connected user accounts or disconnect."
				>
					<ConnectionSettings { ...this.props } />
				</FoldableCard>
				<FoldableCard
					header="Miscellaneous Settings"
					subheader="Manage Snow and other fun things for your site."
				>
					<Settings />
				</FoldableCard>
			</div>
		)
	}
} );

export default connect(
	state => {
		return state;
	},
	dispatch => bindActionCreators( { disconnectSite }, dispatch )
)( GeneralSettings );
