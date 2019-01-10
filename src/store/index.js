import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义state，并将listName设置为一个空对象
const state = {
    listName: [],
    indexData:[],
    token:[],
    threedata:[],
    threetwodata:[],
    search:'',
}
//定义mutations，可以传参，用于设置state里的listName
const mutations = {
    set_listname: (state,value) => {
        state.listName=value;
    },
    set_threetwodata:(state,value)=>{
        state.threetwodata=value;
    },
    set_threedata:(state,value)=>{
        state.threedata=value;
    },
    set_search: (state,value) => {
        state.search=value;
    },
    set_token:(state,value)=>{
        state.token = value;
    },
    set_indexData:(state,value) => {
        state.indexData=value;
    }
}
//定义getters，用于获取出state里的对象
const getters = {
    get_token: state => {
        return state.token
    },
    get_threetwodata: state => {
        return state.threetwodata
    },
    get_threedata: state => {
        return state.threedata
    },
    get_listname: state => {
        return state.listName
    },
    get_indexData: state => {
        return state.indexData
    },
    get_search: state => {
        return state.search
    },
}
//抛出接口
export default new Vuex.Store({
    getters,
    state,
    mutations
})