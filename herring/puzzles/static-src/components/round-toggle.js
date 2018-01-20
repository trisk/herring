'use strict';

var React = require('react');

var RoundToggleComponent = React.createClass({
    propTypes: {
        className: React.PropTypes.string,
        val: React.PropTypes.bool,
        onClick: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            checked: { this.props.val },
        };
    },
    render: function() {
        var contents;
        if (this.state.checked) {
            contents = (
                <input type="checkbox" onChange={ this.handleChange } checked/>
            );
        } else {
            contents = (
                <input type="checkbox" onChange={ this.handleChange }/>
            );
        }
        return (
            <span className={ this.props.className }>
                { contents }
            </span>
        );
    },
    handleChange: function() {
        this.setState({ checked: !this.state.checked });
	this.props.onClick(this.state.checked);
    }
});

module.exports = RoundInfoComponent;
