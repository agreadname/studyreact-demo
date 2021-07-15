#### 1.DeviceEventEmitter
```js
//注册这个监听事件
componentDidMount(){
  this.listener=DeviceEventEmitter.addListener('xxxName',()=>{});
};
//在组件销毁的时候要将其移除
componentWillUnmount(){
    this.listener.remove();
};
//发送通知
DeviceEventEmitter.emit('xxxName','通知来了');
```

#### 2.StyleSheet

```js
const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cover: {
        ...StyleSheet.absoluteFillObject,
        width: deviceWidth,
    },
});
<BaseImage style={appStyles.cover} resizeMode={'cover'} source={require(`./sources/img_home_skeleton_screen.png`)} />
```
项目中StyleSheet的api看到再说

```js
absoluteFillObject={
position:'absolute',
left:0,
right:0,
top:0,
bottom:0};

```

#### 3.propTypes和defaultProps
```js
//在class里可直接写 props检验和预设值
    static propTypes={
        time:PropTypes.string,
        title:PropTypes.string,

    }
    static defaultProps={
        title:'come from china'
    }
```
