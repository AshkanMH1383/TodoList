
import  React  from 'react';

const todosContext = React.createContext({
    todos : [] ,
    add : () => {},
    done : () => {},
    edit : () => {},
    delete : () => {},
})

export default todosContext;