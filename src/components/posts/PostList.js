import React from 'react'
import Post from './Post';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/postActions'
const PostList = ({ posts }) => {
    fetchUsers();
    return (
        posts.map((post) => (
            <Post post = {post}/>
        )
        )
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(PostList);