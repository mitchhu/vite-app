
import { Button } from 'vant';

const count = ref(0)

const renderDom = () => {
  return (
    <div>
      <div>hello tsx</div>
      <div v-text={count.value}></div>
      <Button type="danger" onClick={addCount}>count++</Button>
    </div>
  )
}


const addCount = () => {
  count.value++
}



export default renderDom