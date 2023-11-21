// Importing Stuffs
import { DiscussionEmbed } from 'disqus-react';

export default function CommentSection({ post }) {
    // Variables
    const pageURL = typeof window !== 'undefined' ? window.location.href : ""
    // Returning Html
    return (
        <>
            <DiscussionEmbed
            shortname='bigbeastishank'
                config={
                    {
                        url: pageURL,
                        identifier: post.title,
                        title: post.title
                    }
                }
            />
        </>
    );
}
