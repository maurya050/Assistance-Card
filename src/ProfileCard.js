function ProfileCard({title, image, link}){
    return(
        <a href= {link} className="profile-link" >
        <div className="profile-main">
            <div className="profile-heading">
                <h2>{title}</h2>
                <img src={image} alt="assistance"/>
            </div>
        </div>
        </a>
    );
}

export default ProfileCard;