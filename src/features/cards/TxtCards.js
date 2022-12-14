const TxtCards = (props) => {
    return (
        <div className="container-fluid">
            {props.array.topics.map((topic) => (
                    <div className="col col-lg-10 col-xl-9 mt-4" key={topic.id}>
                        <div className="row align-items-center background-box rounded-2">
                            <div className="col p-0 fs-7">
                                <div className="card p-3">
                                    <div className="card-body">
                                        <h5 className="card-title fs-4">{topic.name}</h5>
                                        {topic.year ? (
                                            <p>{topic.year}</p>
                                        ) : ('')}
                                        <p className="card-text">{topic.description}</p>
                                        {topic.subtopics ? (
                                            topic.subtopics.map((props) => (
                                                    <p key={props.id}>
                                                        <strong>{props.name}</strong><br />
                                                        {props.description}
                                                    </p>
                                            ))
                                            ) : ( '' )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default TxtCards;