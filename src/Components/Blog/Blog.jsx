import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark, handleMarkAsRead}) => {
    const {title,cover,author_img,author,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='my-16'>
            <img className='w-full mb-5 rounded-2xl' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-2'>
                        <h4 className='text-3xl font-medium'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button 
                    className='ml-4 mt-2'
                    onClick={() =>handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-3xl font-semibold mb-2">{title}</h3>
            <p>
                {
                    hashtags.map((hashtag,idx)=> <span key={idx}><a>#{hashtag}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-violet-600 font-bold mt-4'><u>Mark As Read</u> </button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark:PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;