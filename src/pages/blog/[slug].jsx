import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { Box, Button, Heading, Text, Skeleton } from '@chakra-ui/react'

export default function BlogPost({
    frontmatter: { title, date, description, author, read_time },
    slug,
    content,
}) {
    return (
        <>
            <Box className="blogpost">
                <Heading className="title"
                    fontSize={{ lg: '4xl', md: '3xl', sm: '28px', base: '18px' }} fontWeight='700'
                    mb={{ lg: '10px', base: '5px' }} mt={'25px'}>

                    <a>{title}</a>

                </Heading>

                <Text className="description"
                    fontSize={{ xl: '23px', lg: '18px', md: '16px', sm: '14px', base: '11px' }} fontWeight="700"
                    mb={{ lg: '15px', base: '10px' }}>
                    {description}
                </Text>

                <Text className="head-footer"
                    fontSize={{ xl: '19px', lg: '14px', md: '12px', sm: '10px', base: '7px' }}
                    mb={{ lg: '15px', base: '10px' }}>
                    {author} / {date} / {read_time} read
                </Text>

                <Skeleton
                    startColor='pink.500' endColor='orange.500'
                    ml={'-30px'} mr={'-30px'} w={'810'} h={'2px'} mb={6} mt={6} />

                <Box className="content" mb={5}>
                    <Box dangerouslySetInnerHTML={{ __html: marked(content) }} />
                </Box>

                {/* For Mobile and above */}
                <Button d={{ base: 'none', sm: 'flex' }} size={'lg'} className="gb-btn" _hover={"none"} mt={16} borderRadius='full'>
                    <Link href="/blog">Go Back</Link>
                </Button>

                {/* For small mobile */}
                <Button d={{ base: 'flex', sm: 'none' }} size={'md'} className="gb-btn" _hover={"none"} mt={16} borderRadius='full'>
                    <Link href="/blog">Go Back</Link>
                </Button>
            </Box>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('src/pages/blog/posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('src/pages/blog/posts', slug + '.mdx'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}