import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
    useEffect(() =>{
        props.fetchUser(props.id);
    }, [])
    
    return (
        <div className="header">{props.user && props.user.name}</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.id)
    }
}
export default connect(mapStateToProps, {fetchUser})(UserHeader);