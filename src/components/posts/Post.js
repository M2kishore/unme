import PostPic from '../../assets/postpic.jpg'
import { MdClose, MdMoreVert } from 'react-icons/md'
import PostContent from './PostContent';
const Post = () => {
    const mdclose = MdClose;
    return (
        <div className="post row">
            <div className="card col s12 m8 offset-m2">
                <br/>
                <div className="card-image waves-effect waves-block">
                    <img className="activator" src={PostPic} alt="Post Image"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 left">First Memory</span>
                    <span className="date-font right">09/5/20</span>      
                </div>
                <PostContent />
            </div>
        </div>
    );
}

export default Post;