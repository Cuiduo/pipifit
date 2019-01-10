<style lang="less" scoped>
    
</style>

<template>
    <div class="information" slot="information">
        
    </div>
</template>

<script>
import {Range,Cell } from 'vux';
import { setTimeout } from 'timers';
import {mapGetters,mapMutations} from 'vuex'
export default {
    computed: {        
        ...mapGetters(['get_listname','get_token'])
    },
    components:{
        Range,Cell 
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapGetters(['get_listname'])
    },
    
}
</script>
