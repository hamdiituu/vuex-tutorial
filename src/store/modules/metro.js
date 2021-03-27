import metro from '../../data/IstanbulMetroData.json';

export default {
    namespaced :true,
    state :{
        data : null
    },
    getters:{
        dataCount(state){
            return `${state.data.length} adet metro bulunmaktadir.`;
        }
    },
    mutations :{
        setData(state,data){
            state.data = data;
        }
    },
    actions :{
        fetchMetro({commit}){
            commit('setData',metro);
        }
    }
}
