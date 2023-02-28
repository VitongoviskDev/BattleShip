const Ship = (_id, _length = 0) =>{

    let id = _id
    let length = _length;
    let timesHited = 0;
    let shunk = false;

    const size = () => length <= 0 ? null : length;
    const hit = () =>{
        timesHited++;
        if(timesHited == length){
            shunk = true;
        }
        return timesHited;
    }
    const isShunk = () => shunk;
    const getId = () => id;

    return {size, hit, isShunk, getId};

}
export default Ship;