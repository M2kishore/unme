
const PostContent = ({title, content}) => {
    return (
        <div className="card-reveal post-content flow-text">
            <span className="card-title center grey-text text-darken-4">{title}</span>
            <p>{content}</p>
        </div>
    );
}

export default PostContent;