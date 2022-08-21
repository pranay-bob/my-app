export const Card = (el)=> {
    return (
        <div className="card-wraper">
            <div id='top'>
            <img className="profile-pic" height={50} width={50} src={el.image} alt='photo'/>
            <h3>
                {el.firstname}  {el.lastName} {el.age}
            </h3>
            </div>
            <div id='bottom'></div>
        </div>
    );
};