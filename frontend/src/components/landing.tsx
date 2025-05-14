import './landing.css'

const landing = () => {
    return (
        <div className=' landcont'>

            <div className='land-left'>

                <div className="tagline1">
                    Learn a New skill Everyday, Anytime and Anywhere.
                </div>

                <div className=' left2'>
                    <div className=' land-text'>
                        <b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo eveniet in numquam, eum fugiat consequatur aperiam repudiandae praesentium repellendus neque natus iusto!
                    </div>
                    <div className='land-btns'>
                        <div className="btn1">Start Trial</div>
                        <div className="btn2">How it Works</div>
                    </div>
                </div>

            </div>

            <div className=' land-right'>
                <img width={600} height={600} src="image1.png" alt="img" />
            </div>



        </div>
    )
}

export default landing
