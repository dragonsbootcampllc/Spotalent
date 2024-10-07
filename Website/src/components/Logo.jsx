
export default function Logo(image_urls) {
    return (
        <div className="">
            <h3 className=""></h3>

            <div className="">
                {
                    image_urls.map((url) => (
                        <img className="" src={url} alt="company logo" />
                    ))
                }
            </div>
        </div>
    )
}
