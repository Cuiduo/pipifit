<template>
    <div>
        <h3>Count is {{count}}</h3>
        <h3>AnoterIncrement is {{countAnother}}</h3>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        computed: {
            ...mapState(["count"]),
            countAnother: function () {  // 获取state
                return this.$store.getters.countAnother;
            }
        }    
    }
</script>