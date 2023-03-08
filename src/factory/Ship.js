const Ship = (_id, _length, _direction, _timesHited, _shunk) =>{

    let id = _id
    let length = _length || 1;
    let timesHited = _timesHited || 0;
    let shunk = _shunk || false;
    let direction = _direction || 'H';

    function hit(){
        this.timesHited++;
        if(timesHited == length-1){
            this.shunk = true;
        }
    }
    function isShunk(){return this.shunk};
    function getId(){return this.id};

    return {id, length, timesHited, shunk, direction, hit, isShunk, getId};

}
export default Ship;