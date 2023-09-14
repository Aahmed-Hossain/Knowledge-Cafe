import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 mt-24 bg-gray-200 ml-2 rounded-xl ">
            <div>
            <h3 className='text-3xl text-center font-bold bg-violet-100 rounded-xl p-4'>Spent time on read:{readingTime}min</h3>
            </div>
            
            <div className=' bg-gray-200 rounded-xl ml-4'>
            <h1 className="text-3xl font-semibold text-center mt-4">Bookmarked Blog:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark 
                key ={idx}
                bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
    bookmark: PropTypes.func
}

export default Bookmarks;