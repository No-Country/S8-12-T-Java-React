import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/latoFont.css'
import { LandingsCards } from '../components/LandingsCards'
import { QuoteLeft } from '../assets/icons/Icons'
export default function Landing() {
  
  return (
    <>
     <div className='bg-neutral-100 text-black w-full flex flex-col justify-evenly items-center'>
     <div className='h-[90vh] mt-[4vh] flex flex-col justify-evenly items-center'>
        <img className={`max-w-[80%] drop-shadow-md`} src='https://s3-alpha-sig.figma.com/img/74a5/5d93/69e7bafd83dfd7b80065f0d7931c2fbc?Expires=1685318400&Signature=HPU0W0GBE8mPbZXAfIdJeVy7YRZS2XxgOYlfEjG90-UE5qpfWtYJCh~777YHzMjSnU4Y66TRXZDpayjH4zyzQcyESqByXqevJ5z~ZKyDrwEpIUdaXZqTou4GkYiMNNx22sJgRn6Zty-JLeNM2WOUhZ54jQnC~~M8NT8IDsoqrXtmK68Tvjz4kgSvPeO5v2NY~m6ajkPL7lg165ORHRJ6eVcbPJfYCTHv1xWMMesXRv09whK8nSTo221sEt8S83RTZ3-dQOYxnRbyE90U2ggtmYQxjNkTGcoJxFGzb8OR7FIyt-xJuyFU9LHsCOTL6NrI3n8W99CzIpw8DBY2keu5QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='1'></img>
        <h2 className='w-[90vw] text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>Lorem ipsum dolor sit amet<br/>consectetur. Lacinia imperdiet<br/>consectetur nunc a tortor quam.</h2>
        <h3 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>Lorem ipsum dolor sit amet consectetur.<br/>Cras facilisi quam.</h3>
        <Link to={'login'}><button className='w-[90vw] h-[6vh] bg-[#6D28D9] text-white font-["Lato","sans-serif"] font-normal rounded-lg'>Registrarse gratis</button></Link>
      </div>
        <h2 className='w-[90vw] text-[1.15em] mt-[14vh] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>Lorem ipsum dolor sit amet<br/>consectetur. Lacinia imperdiet<br/>consectetur nunc a tortor quam.</h2>
        <h3 className='w-[90vw] text-[1em] mt-[3vh] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>Lorem ipsum dolor sit amet consectetur. Amet scelerisque sapien dui lorem. Eget cursus eget velit vestibulum eu. Interdum condimentum.</h3>
        <img className={`max-w-[80%] drop-shadow-md mt-[5vh]`} src='https://s3-alpha-sig.figma.com/img/7809/1e44/a5c8268a07ef3c2d41897bfbf4068424?Expires=1685923200&Signature=NSyOS6bxV3SCIcPhKYmfMOf90BDx1zvr-yGyn9UeUEwCgIsGBDRO864ZySEYNSeHllMIfrNY6CkkL70Q8UtSobO46DhfhVhwEb73hBP~1-5wy~apUHXF9-KiTJl8OGCmIG~L9rFXJ3M7o2SDVQFd7lhyEQt757XvPOMyxM56JSLMzS2IdndIllNqvHh~qXzDKQg0fsMsk5mnMcpockN1ZVyII7IG~Po7dQJ3KbJOyjA~DQ81h5OawgnY~rMezuvR8SjUjJLDHyDC7Q-OP4j3jf4xHaHpWsuH6YyxgwcJ3o2yGbxp4Wk4Of~~D4u~fjSaegtwBpvis54IwLeDQxfYiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='1'></img>
        <h2 className='w-[90vw] text-[1.25em] my-[6vh] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>¿Qué Ofrecemos?</h2>
      <div className='flex flex-col items-center gap-y-[3vh]'>
        <LandingsCards img={'https://s3-alpha-sig.figma.com/img/d251/0cb7/6ca0c05c86c15661a7b44ae9dd767289?Expires=1685923200&Signature=JBgOb01uGpZ-rOTHXHvPGB9nx8T81bot7u-XZHWDFbIKqCDJE3GJ157gL-q~L96UJ4-MzKaZV2gV4bB~JwA7~dx9KZa~N32~RiyQQvUyinPTVlfjBubO2lJoVk63fWDN0vJ8GSDs-NXbOjKExZ8O7gMEsuPcnQ-fiTJdd3tJDteSaScoWDUvs29VIXv4MQZnRfeXq3tI~T2R45vicgLqhLI93fi8se6glJ-sk6zp-5mPsPUKPQTi4zozryaJefX4iSy5OZJQ9hxuQgzNwF6ViK-2uJZsCTMlw~Qv6fCwSR4LEeJGIxJ~xLFWsAwUqAI9p0sH16S~3SMvfN9gSLJC1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} title={'Postulaciones'}/>
        <LandingsCards img={'https://s3-alpha-sig.figma.com/img/10a8/3e2f/494889d1efcac5f0c3a71fe6750e1adc?Expires=1685923200&Signature=pqJRRloLt7OkGS59saQ~lN04O1qS6RNaBURAsAiTDu7HDyh30SJvX7yg29pyQjUlBZSJ8bPDV9G3ImptoCwxGNqUB-oXFjh1I4jfnEliIpA90fj5MPn86cLLUTcULN-v4Th4hdkFy2do~udpS9E1zayxYHNYW6NV5wAcvTT2GpugxiNnczWeaQXIir0JV03Rlnty5l9iRSPsvukLhG-lGd5FZfFfZ21gPFlzhDPoqmtMWngFXYvJQZM-AY2TDBIaMFDedxoFyTyrcs9z9TUmKSeDsa38NPMFXmfWYXqaeYNYOn-QNdrCfQrIhuAJ6W35bNIchcA-AsdN9sNsVsLfRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} title={'Biblioteca'}/>
        <LandingsCards img={'https://s3-alpha-sig.figma.com/img/24a0/1d81/5a5fe72936fe3ced4b0d7505db610b52?Expires=1685923200&Signature=NBHXHo~WOkudFlSI~4vn3r6AKLME4BPtINidgW~NxY~QhQdWhTWveXaqo2rCLcF7QdUW~CblrENcWrC1v7-Fi0F8b97klNeAUhk2c5YFtdezhSMxw7bny38Vn3NDbujQIHGjkgbNVMyYPyXTH~UnL~0h6YVL0kop8GyST2ry1HcovOAIR7kjGnvdmm5w27WXuQSUgNm2CaFZzycUFgy0W7RsqJH5tEhFb07a~mFuiL~p~Dpj7cM~iSd3vW499ECent1q8eSz2sm4EgALXM5wzQ7qAQRuUS2E8D~~CXL80YRimVQWU5tXj6KzVGVIW3fEA0DR~DionLAWKCMiXOi7Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} title={'Métricas'}/>
        <LandingsCards img={'https://s3-alpha-sig.figma.com/img/eb46/6bbc/04c0596c574a352a704d2fb5aa11d7cf?Expires=1685923200&Signature=fyPN12RKGEJ-xv7OyfgOxZvX8CQo0v75xfCf7eCdjKlzmABieYNMOMCFbIWMUvOPgBcTP8QUZdJ18fqlg3ai~3BG1twv4r7dt7cN9FhZsZ-zOugQeVN1SPc9~Vf00ngIZRf9Byky8yc8djlvfG~2LBa8VDjnVTz0t70V9aWscuU0FPExRBeX-eK~cXVrqzJaxEDovqIExOwIcy~OHADzW7tuTVQ7Q2~298~-6O5zIXLzkHxNthfhqwv57mQUBkWgL-28DeGmDMY7wDYov52VuE0jyaDAKs4vb37ICbaj2hdS39EyKZ~jY1kN2rXW8BOQR6vlqAw8RUElvv42RGbhpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} title={'Calendario'}/>
      </div>
      <div className='h-[75vw] flex flex-col justify-evenly my-[15vh]'>
      <h2 className='w-[90vw] text-[1.25em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>Testimonios</h2>
      <QuoteLeft/>
      <h2 className='max-w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-bold'>Lorem ipsum dolor sit amet consectetur. Nunc nascetur facilisis vulputate diam enim leo. Egestas morbi libero pharetra massa dignissim est quisque porttitor consectetur. Id egestas volutpat vivamus varius ultrices viverra laoreet lorem. Id sed quam mauris et.</h2>
      <h3 className='w-[90vw] text-[1em] text-center text-neutral-900 font-["Lato","sans-serif"] font-normal'>- Lorem Ipsum</h3>
      </div>
     </div>
    </>
  )
}

