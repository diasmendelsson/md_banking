export default function HeaderBox({type="title", title, subtext, user}){
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === 'saudações' && (
                    <span className="text-bankGradient">&nbsp;{user}</span>
                )}
            </h1>
            <p className="header-box-subtext">{subtext}</p>
        </div>
    )
}