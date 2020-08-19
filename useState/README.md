### useState实现原理及分析

```
    const [n,setN] = useState(0)
    const [x,setX] = useState('')
```

- useState会返回两个值，属性n和设置属性的方法setN,其中setN会触发组件的重新渲染
- useState可以重复调用，生成不一样的x,和setX,并且生成的值与之前的不影响
