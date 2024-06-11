import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {description} = bookmark
    return (
        
        <div className='bg-slate-200 mb-1 rounded ml-5 '>
            <h1>{description}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;