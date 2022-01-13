import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from './post'
import { Box, Heading, Text, Skeleton } from '@chakra-ui/react'

export default function Blog({ posts }) {

    return (
        <>
            <Box className='blog'>
                <Heading className='heading'
                    fontSize={{ lg: '6xl', md: '5xl', sm: '39px', base: '25px' }} fontWeight='700'
                    textAlign={'center'}
                    mb={{ lg: '20px', md: '15px' }}>

                    <a>My Blogs</a>

                </Heading>

                <Box className="content"
                    fontSize={{ xl: '25px', lg: '20px', md: '18px', sm: '16px', base: '13px' }} fontWeight="700"
                    textAlign={'center'}>
                    <Text>
                        I write my blogs over here. You can see all the post by just clicking on title of the blogs. I hope you enjoy
                    </Text>
                </Box>

                <Skeleton
                    startColor='pink.500' endColor='orange.500'
                    ml={'-30px'} mr={'-30px'} w={'810'} h={'2px'} mb={6} mt={6} />

                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </Box>
        </>
    )
}

export async function getStaticProps() {

    // Get files from post dir
    const files = fs.readdirSync(path.join('src/pages/blog/posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.mdx', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('src/pages/blog/posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }

    })

    return {
        props: {
            posts
        }
    }
}