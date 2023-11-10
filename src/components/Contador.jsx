import React, { useEffect, useRef, useState } from 'react'

const Contador = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
  
    let interval = useRef()
  
    const startTimer = () =>{
      const countDate = new Date('November 22, 2023 00:00:00').getTime()
      interval = setInterval(()=>{
        const now = new Date().getTime()
        const distance = countDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
        if (distance < 0) {
          clearInterval(interval.current)
        }else{
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
      }, 1000)
    }
  
    useEffect(()=>{
      startTimer()
      return ()=>{
        clearInterval(interval.current)
      }
    })
  return (
    <div>
      <section className='timer-container'>
        <section className='timer'>
          <div className='contador'>
            <div className="contadores">
              <p className='valores'>{timerDays}</p>
              <p className="tiempos">Dias</p>
            </div>
            <div className="contadores">
              <p className='valores'>{timerHours}</p>
              <p className="tiempos">Horas</p>
            </div>
            <div className="contadores">
              <p className='valores'>{timerMinutes}</p>
              <p className="tiempos">Minutos</p>
            </div>
            <div className="contadores">
              <p className='valores'>{timerSeconds}</p>
              <p className="tiempos">Segundos</p>
            </div>
            
          </div>
        </section>
      </section>
    </div>
  )
}

export default Contador