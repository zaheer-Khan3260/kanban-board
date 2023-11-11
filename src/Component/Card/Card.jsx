import './Card.css'
import alert from './alert.png'
import personImage from './personImage.jpeg'
export default function Card({
     Id,
     title,
     tag,
     status,

})

{
     return(
        <div className="card-cont">
            <div className="first-cont">
                <span className="u-id" style={{textTransform: "uppercase"}}>
                    {Id}
                </span>
                <div className='imageContainer'>
                <img
                 src={personImage}
                 alt="user-image" 
                 style={{
                    width:"100%",
                    height: "100%",
                    borderRadius: "50%"
                 }}
                 />
                    <div className='status'></div>
                </div>
            </div>
            <div className='second-cont'>
                <p>
                    {title}
                </p>
            </div>
            <div className='third-cont'>
                <div className='img-cont'>
                    <img src={alert} alt="" className='feature-image'/>
                </div>
                <div className='text-cont'>
                    <p style={{fontSize:"15px"}}><span>.</span>{tag}</p>
                </div>
            </div>
        </div>
     )
}