import { useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components/layout/Layout'
import { QuizList } from '../components/mainContent/QuizList'
import { Test3 } from '@/components/testing/Test3'
import { Test4 } from '@/components/testing/Test4'
import { WelcomeMessenge } from '@/components/messenges/WelcomeMessenge'

export default function Home() {

  return (
    <>
      <Head>
        <title>KichwaP</title>
        <link rel="icon" href="/assets/img/favicon2.ico" />
      </Head>
      <main>
        <Layout>  
          <QuizList/>
          <WelcomeMessenge />
        </Layout>
      </main>
    </>
  )    
}