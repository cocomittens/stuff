const Hashtags = (props) => {
    const { hashtags } = props;

    return (
        <section className='hashtagsect'>
            {hashtags.map((hashtag, idx) => {
                const psuedoKey = `${hashtag.indices[0]}${hashtag.indices[1]}${idx}`;

                return <div className='hashtag' key={psuedoKey}>#{hashtag.text}</div>
            })}
        </section>
    )
}

export default Hashtags;
