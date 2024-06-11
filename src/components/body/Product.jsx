import PropTypes from 'prop-types';

const Product = ({product, handleAddToBookmark}) => {
    const {thumbnail_img, profile_img, title, description, made_in} = product
    return (
        <div className='mb-12'>
            <div>
                <img className='w-full' src={thumbnail_img}></img>
            </div>
            <div className='flex justify-between mt-1'>
                <div className='flex'>
                    <div className='mr-4'>
                        <img className='w-16' src={profile_img}></img>
                    </div>
                    <div>
                        <h1>{title}</h1>
                        <h2>{made_in}</h2>
                    </div>
                </div>
                <div onClick={() => handleAddToBookmark(product)}>
                    <button className='bg-sky-200 p-2 rounded font-bold'>Bookmark</button>
                </div>
            </div>
            <h1>{description}</h1>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Product;