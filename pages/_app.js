import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return(
    <AnimatePresence>
      <Layout>
        <Component key={router.pathname} {...pageProps} />
      </Layout>
    </AnimatePresence>
    
  )
   
}
