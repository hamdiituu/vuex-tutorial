export default {
    namespaced : true,
    state : {
        number1 : 43,
        number2 : 65,
    },
    getters :{
        sumNumbers(state){
            return state.number1 + state.number2;
        }
    },
    mutations :{
        setNumber1(state,number){
            state.number1 = number;
        },
        setNumber2(state,number){
            state.number2 =  number;
        }
    },
    actions :{
        changeNumber({commit},number1,number2){
            commit('setNumber1',number1);
            commit('setNumber2',number2);
        }

    }
}
