import Container from 'react-bootstrap/Container';
import Head from 'next/head';
import Header from '../components/header/Header';

function Layout({children}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link 
                    rel="stylesheet" 
                    href="https://bootswatch.com/4/flatly/bootstrap.min.css" 
                    crossOrigin="anonymous"
                />

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            </Head>
            <Container>
                <Header />
                <Container>
                    {children}
                </Container>
            </Container>
        </>
    );
}

export default Layout;