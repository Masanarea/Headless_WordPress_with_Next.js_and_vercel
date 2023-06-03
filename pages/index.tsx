import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

// カスタム
import PostPreview from '../components/main/post-preview'
// すワイパー関連
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-32"> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 6,
              },
            }}
          >
          {edges.map((post) => (
            <SwiperSlide key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </section>
      {/* <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head> */}
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
