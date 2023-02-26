const Ship = (_length) =>{

    let length = _length || 0;
    let timesHited = 0;
    let isShunk = false;

    const size = () => length;
    const hit = () =>{
        timesHited++;
        if(timesHited == length){
            isShunk = true;
        }
    }

    return {size, hit};

}
export default Ship();