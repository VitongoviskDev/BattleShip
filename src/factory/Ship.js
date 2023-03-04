const Ship = (_id, _length, _direction, _timesHited, _shunk) =>{

    let id = _id
    let length = _length || 1;
    let timesHited = _timesHited || 0;
    let shunk = _shunk || false;
    let direction = _direction || 'H';

    const hit = () =>{
        timesHited++;
        if(timesHited == length){
            shunk = true;
        }
        return timesHited;
    }
    const isShunk = () => shunk;
    const getId = () => id;

    return {id, length, timesHited, shunk, direction, hit, isShunk, getId};

}
export default Ship;