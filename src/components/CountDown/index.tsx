import { useCallback, useEffect, useState } from 'react'

interface IProps {
  minutes?: number,
  seconds?: number,
}

export default ({ minutes = 0, seconds = 0 }: IProps) => {
  const [isTimeOver, setTimeOver] = useState(false)
  const [time, setTime] = useState({
    minutes,
    seconds
  })

  const triggerCountDown = useCallback(() => {
    if (isTimeOver) return
    if (time.minutes === 0 && time.seconds === 0) {
      setTimeOver(true)
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes ? time.minutes - 1 : time.minutes,
        seconds: 59
      })
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      })
    }
  }, [time, isTimeOver])

  useEffect(() => {
    const timer = setInterval(triggerCountDown, 1000)

    return () => clearInterval(timer)
  }, [triggerCountDown])

  return (
    <>
      <p>
        {`${
          time.minutes.toString().padStart(2, '0')}:${
          time.seconds.toString().padStart(2, '0')}`
        }
      </p>
    </>
  )
}
