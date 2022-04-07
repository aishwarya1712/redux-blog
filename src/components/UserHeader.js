import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
    return (
        <div className="header">{props.user && props.user.name}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.id)
    }
}
export default connect(mapStateToProps)(UserHeader);