import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ContentComponent = ({ newsToShow, byCategory, byLatest }) => {

    const { id } = useParams();

    useEffect(() => {
        byCategory(id);
        byLatest(id);
    }, [id]);


    return (

        <>
            {newsToShow.map((news, index) => {
                return (
                    <div className="card-deck mb-1" key={index}>
                        <div className="card text-dark">
                            <img src={news.img_url} className="card-img-top" alt={news.title} />
                            <div className="card-body">
                                <h5 className="card-title">{news.source_name}
                                    <span className="badge badge-pill badge-info ml-2">{news.category}</span>
                                </h5>
                                <p className="card-text">{news.title}...
                                    <a className="badge btn-outline-info" href={news.url} target="_blank">Click to see more</a>
                                </p>
                                <p className="card-text"><small className="text-muted">Last updated {news.date} ago</small></p>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>

    )
}
export default ContentComponent;