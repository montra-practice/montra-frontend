import CountDown from '@/components/CountDown'

export default () => {


  return (
    <div>
      <h2>Enter your Verification Code</h2>
      <div>Code</div>
      <CountDown minutes={5}/>
    </div>
  )
}
