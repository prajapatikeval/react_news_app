import default_image from '../assets/default.jpg'

const NewsItem = ({news_title,news_description,news_src,news_url}) => {
    return (
        <>  
            {news_title && news_description && news_src && news_url && (
                <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"305px"}}>
                <img src={news_src?news_src:default_image} style={{height:"160px",width:"100%"}} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{news_title.slice(0,40)}</h5>
                    <p className="card-text">{news_description?news_description.slice(0,90):"None"}</p>
                    <a href={news_url} target="_blank_" className="btn btn-primary">Read More</a>
                </div>
                </div>
            )}
        </>
    )
}
export default NewsItem