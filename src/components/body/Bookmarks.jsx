import Bookmark from "./Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='w-1/3'>
            
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;