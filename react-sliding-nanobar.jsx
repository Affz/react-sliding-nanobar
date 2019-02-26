import * as React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const propTypes = {
   options: {
       color: PropTypes.string
   }
}

const defaultProps = {
    options: {
        color: '#91cde2'
    }
}
class ReactInfiniteNanobar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var { options } = this.props;
        return (
            <div style={{backgroundColor: options.color}} className="nanobar-loader" />
        );
    }
}

ReactInfiniteNanobar.propTypes = propTypes;
ReactInfiniteNanobar.defaultProps = defaultProps;

export default ReactInfiniteNanobar;