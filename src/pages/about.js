import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="aboutページ"/>
            <h1>aboutページです</h1>
            <p>aboutページにようこそ</p>
            <Link to="/">ホームに戻る</Link>
            <a href="https://google.com" rel="noreferrer noopener">Googleへ</a>
        </Layout>
    )
}

export default AboutPage;