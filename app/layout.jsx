import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import {Analytics} from "@vercel/analytics/next";

export const metadata = {
    title: {
        default: 'Wizualizacja dużych zbiorów danych',
        template: 'Wizualizacja dużych zbiorów danych | %s'
    },
}

const navbar = <Navbar logo={<b>Wizualizacja dużych zbiorów danych</b>} projectLink="https://github.com/langMonk/data-visualization-course" />
const footer = (
    <Footer className="flex-col items-center md:items-start">
        Wizualizacja dużych zbiorów danych {new Date().getFullYear()}
    </Footer>
)

export default async function RootLayout({ children }) {
    return (
        <html
            lang="pl"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>
        </Head>
        <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.css" />
        <Layout
            //banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/langMonk/data-visualization-course/tree/main"
            editLink=""
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            footer={footer}
            feedback={{content: 'Zauważyłeś błąd, masz pomysł co poprawić - zgłoś propozycję!'}}
        >
            {children}
        </Layout>
        <Analytics />
        </body>
        </html>
    )
}