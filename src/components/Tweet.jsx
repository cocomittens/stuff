const Tweet = (props) => {
    const {
        image,
        user,
        text
    } = props;

    const tweetURLIdx = text.indexOf('http');

    const tweetText = text.slice(0, tweetURLIdx);

    const tweetURL = text.slice(tweetURLIdx);

    return (
        <div className="tweet">
            <section className='avatar' >
                <img src={image} alt={user} />
            </section>
            <section className='tweetText'>
                <p className='user'>@{user}</p>
                <p>
                    {tweetText}
                    <a className='link' href={tweetURL} target='blank'>{tweetURL}</a>
                </p>
            </section>
        </div>
    )
}

export default Tweet;
