import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NotificationContent extends Component {
    constructor(props) {
        super(props);
        this.onContentScroll = this.onContentScroll.bind(this);
    }

    componentDidMount() {
        this.refs.rrContent.addEventListener('scroll', this.onContentScroll);
    }

    componentWillUnmount() {
        this.refs.rrContent.removeEventListener('scroll', this.onContentScroll);
    }

    onContentScroll(e) {
        if (this.props.onScroll) {
            this.props.onScroll(e);
        }

        if ((e.target.scrollHeight - e.target.scrollTop) == e.target.clientHeight) {
            if (this.props.onScrollBottom) {
                this.props.onScrollBottom();
            }
        }
    }

    render() {
        return (
            <div className="rn-content" ref="rrContent">
                {this.props.children}
            </div>
        );
    }
}

NotificationContent.displayName = 'NotificationContent';
NotificationContent.proptypes = {
    children: PropTypes.node.isRequired
};
