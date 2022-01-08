import Image from "next/image";

export default function Footer() {

    const s_media = "/images/social-media/";
    const height = "25px";
    const width = "25px";

    return (
        <>
            <center>
                <footer>
                    <div className="title">
                        <a>Made from 💖 by <b>BIGBEASTISHANK</b></a>
                    </div>

                    <div className="description">
                        <a>Made from scratch using <a target="_blank" href="https://nextjs.org"><strong>Next.js</strong></a> and <a target="_black" href="https://sass-lang.com/"><strong>SASS</strong></a></a>
                        <br />
                        <div className="social-media">
                            <a href="https://github.com/bigbeastishank" target="_black"><Image src={s_media + "github.webp"} height={height} width={width}></Image></a>
                            <a href="mailto:pranjal3211p@gmail.com" target="_blank"><Image src={s_media + "email.webp"} height={height} width={width}></Image></a>
                            <a href="https://instagram.com/opishank" target="_blank"><Image src={s_media + "instagram.webp"} height={height} width={width}></Image></a>
                            <a href="https://open.spotify.com/user/n37h63t5acey8z9kqu3dwjp1l" target="_blank"><Image src={s_media + "spotify.webp"} height={height} width={width}></Image></a>
                            <a href="https://discord.gg/WdeHDmwKFn" target="_blank"><Image src={s_media + "discord.webp"} height={height} width={width}></Image></a>
                            <a href="https://snapchat.com/add/opishank" target="_blank"><Image src={s_media + "snapchat.webp"} height={height} width={width}></Image></a>
                            <a href="https://steamcommunity.com/id/bigbeastishank" target="_blank"><Image src={s_media + "steam.webp"} height={height} width={width}></Image></a>
                            <a href="https://twitter.com/opishank" target="_blank"><Image src={s_media + "twitter.webp"} height={height} width={width}></Image></a>
                            <a href="https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw" target="_blank"><Image src={s_media + "youtube.webp"} height={height} width={width}></Image></a>
                        </div>
                    </div>

                    <div className="rights">
                        <a>© 2022 by Ishank, All rights reserved.</a>
                    </div>
                </footer>
            </center>
        </>
    )
}