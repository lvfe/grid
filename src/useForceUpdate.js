import React from 'react';
function useForceUpdate(){
    const [, forceupdate] = React.useReducer(x=>x+1, 0);
    return forceupdate;
}
export default useForceUpdate;