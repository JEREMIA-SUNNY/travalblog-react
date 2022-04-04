import {GoLocation} from  'react-icons/go';
const Card = (prop) => {
    return ( 

        <div className="card" >
            <img className="img1" src={prop.img} alt="" />
            <div className="card-write">
                <p><GoLocation/>{prop.location}</p>
                <h1>{prop.name}</h1>
                <h6>{prop.date}</h6>
                <p>{prop.desc}</p>
                <img className='img2' src={prop.img2} alt="" />
            </div>
        </div>


     );
}
 
export default Card;