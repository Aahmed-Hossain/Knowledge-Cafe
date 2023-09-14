import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-gray-300 p-4 m-4 rounded-2xl'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes ={
    bookmark: PropTypes.obj,
    readingTime: PropTypes.number,

}