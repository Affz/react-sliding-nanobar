import * as React from 'react';
import './loader.css';
const propTypes = {
    color: propTypes.string.isRequired
}
const defaultProps = {
    color: ''
}

class Nanobar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nanobar-loader" style={{backgroundColor: this.props.children}}/>
        );
    }
}
Nanobar.propTypes = propTypes;
Nanobar.defaultProps = defaultProps;
export default Nanobar;
