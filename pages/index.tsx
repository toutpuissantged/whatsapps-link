import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { Button , Input , Textarea , Container, Row, Col , Spacer  , Loading} from '@nextui-org/react';
import { useState , } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCopy } from '@fortawesome/free-solid-svg-icons'

const GenerateLink = (number  : string , message : string)  : string=> {
  const filter_number = number.replace(/[^0-9]/g, '');
  const message_encoded = encodeURIComponent(message);
  const whatsapp = `https://wa.me/${filter_number}?text=${message_encoded}`
  return whatsapp
}

const Home: NextPage = () => {
  const [number , setNumber] = useState('')
  const [text , setText] = useState('')
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapps Link Generator</title>
        <meta name="description" content="App can generate whatsapps link" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Whatsapps Link Generator 
        </h1> <em>by <a href="http://github.com/toutpuissantged">toutpuissantged</a> </em>

        <p className={styles.description}>
          Create custom link to whatsapp group or user and share it with your friends.
        </p>

        <div className={styles.grid}>
       
            <Col>
              <Row>
                <Input labelPlaceholder="Your phone number"  color='primary' clearable value={number} onChange={e=>{setNumber(e.target.value)}} bordered />
              </Row>
              <Spacer />
              <Row>
                <Textarea placeholder="Custom message to send " className='text_area_box' value={text} color='success' bordered onChange={e=>{setText(e.target.value)}} rows={4}/>
              </Row>
              <Spacer />
              
              <Row>
                <Input readOnly  contentRightStyling={false}  status="default" bordered initialValue="Your link generated"  value={GenerateLink(number,text)} labelLeft="Link"  size='lg' labelRight={<FontAwesomeIcon />} />
                
              </Row>
            </Col>
     
        </div>
      </main>
    </div>
  )
}

export default Home
