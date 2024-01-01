import Head from "next/head";

const Meta = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="" />
            <meta property="og:site_name" content={props.title} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={props.title} />
            <meta name="twitter:image" content="" />
            <meta property="og:url" content="/" />
            <meta name="twitter:site" content="@" />
            <meta name="twitter:creator" content="@" />
            <meta property="twitter:description" content="" />
            <meta name="keywords" content="" />
            <meta name="description" content="" />
        </Head>
    );
}

export default Meta;