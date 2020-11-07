import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCurrentDate } from '../../utils/getCurrentDate'
import oops from '../../utils/oops.png';

export const ContentComponent = ({ newsToShow, byCategory, byLatest }) => {

    const { id, currentDate } = useParams();

    useEffect(() => {
        if (currentDate) {
            return byLatest(currentDate);
        } else if (id) {
            return byCategory(id);
        } else {
            byLatest(getCurrentDate());
        }
    }, [id, currentDate])


    return (
        <>
            {!newsToShow.length &&
                <div className="card-deck mb-1">
                    <div className="card text-dark">
                        <img src={oops} className="card-img-top" alt="no hay nada" />
                        <div className="card-body text-center">
                            <h3 className="card-title">Oops! Something went wrong</h3>
                            <p className="card-text mb-5">Try to find another news or select a category</p>
                        </div>
                    </div>
                </div>
            }
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