import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroesImages";



export const HeroesCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    
    const imgPath = heroImages(`./${id}.jpg`);

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imgPath} alt={superhero} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/heroes/${id}`}>More...</Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}