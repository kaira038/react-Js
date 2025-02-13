import computer from './assets/computer-logo.avif'


function Card(){

    return(
        <div className="card">
             <img className='card-img' src={computer} alt="image-profile" width={150}/>
             <h2 className='card-head'>Kavipriya</h2>
             <p className='card-txt'>Hands on experience in web development, Looking for good oopertunity.</p>
        </div>
    );
}

export default Card