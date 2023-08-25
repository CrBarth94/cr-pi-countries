import { CONT_FILT, ORDER,ORDER_NAME,ALL_PAISES, ACTIVIDADES,SRCH_PAIS } from "./actions";

let initialState={
    myPaises:[],
    todoLosPaises:[],
    todasActividades:[]
}

const rootReducer=(state=initialState ,action)=>{

    switch(action.type){
        case ALL_PAISES:
            return{...state, myPaises: action.payload, todoLosPaises:action.payload};
        case CONT_FILT:
            return{...state,myPaises:state.todoLosPaises.filter((pais)=>pais.continente===action.payload)};
        case SRCH_PAIS:
            return{...state,myPaises:state.todoLosPaises.filter((pais)=>pais.name.toLowerCase().includes(action.payload.toLowerCase()))};    
        case ORDER:
            let ordenados;
            if(action.payload==="Ascendente"){
              ordenados=state.myPaises.sort((a,b)=>a.poblacion>b.poblacion?1:-1)  
            }
            else{
                ordenados=state.myPaises.sort((a,b)=>a.poblacion>b.poblacion?-1:1)
            }
            return{
                ...state, myPaises:[...ordenados]
            }
        case ACTIVIDADES:
            return{...state,todasActividades:action.payload}
        case ORDER_NAME:
            let ordenados2;
            if(action.payload==="A-Z"){
              ordenados2=state.myPaises.sort((a,b)=>a.name>b.name?1:-1)  
            }
            else{
                ordenados2=state.myPaises.sort((a,b)=>a.name>b.name?-1:1)
            }
            return{
                ...state, myPaises:[...ordenados2]
                }
        default:
            return{...state};
        };
        
};

export default rootReducer;