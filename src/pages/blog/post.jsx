import { Box, Heading, Text, } from '@chakra-ui/react'
import Link from 'next/link'

export default function Post({ post }) {
    return (
        <Box mb={12} className='posts'>

            <Heading className="title"
                fontSize={{ lg: '4xl', md: '3xl', sm: '28px', base: '18px' }} fontWeight='700'
                mb={{ lg: '10px', base: '5px' }} mt={'15px'}>

                <Link href={`/blog/${post?.slug}`}>
                    <a>{post?.frontmatter.title}</a>
                </Link>

            </Heading>

            <Text className="description"
                fontSize={{ xl: '23px', lg: '18px', md: '16px', sm: '14px', base: '11px' }} fontWeight="700"
                mb={{ lg: '15px', base: '10px' }}>
                {post?.frontmatter.description}
            </Text>

            <Text className="date"
                fontSize={{ xl: '19px', lg: '14px', md: '12px', sm: '10px', base: '7px' }}>
                <i>{post?.frontmatter.date}</i>
            </Text>
        </Box>
    )
}