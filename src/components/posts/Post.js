import PostPic from '../../assets/postpic.jpg'
import { MdClose, MdMoreVert } from 'react-icons/md'
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
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">First Memory</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;