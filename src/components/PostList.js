import React from "react";
import {connect} from "react-redux";
import { fetchPostsAndUsers } from '../actions'
import UserHeader from "./UserHeader";

class PostList extends React.Component{
    componentDidMount(){
        // action creator placed here, will make req to JSON placeholder api using axios
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <UserHeader  id={post.userId}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        // console.log(this.props.users)
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// mSTP is for reducers
// {fetchPosts} is the action creator
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);