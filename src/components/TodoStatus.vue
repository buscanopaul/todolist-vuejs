<template>
    <div>
        <ul class="row tabs">
            <li class="text-right">
                <button @click="changeTab" :class="{active:completed}">Completed</button>
            </li>
            <li class="text-left">
                <button @click="changeTab" :class="{active:!completed}">Not Completed</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters(['completed'])
    },
    methods: {
        ...mapActions(['changeCompleted']),
        changeTab() {
            this.changeCompleted();
        }
    }
}
</script>

<style scoped>
    ul {
    list-style-type: none;
    display: flex;
    }
    button {
    outline: none;
    border: none;
    padding: 10px 20px;
    color: #000;
    }
    button:hover {
    outline: none;
    background-color: rgb(194, 243, 227);
    }
    .active {
    outline: none;
    color: white;
    background-color: rgb(0, 202, 135);
    }
    .active:hover {
    outline: none;
    border: none;
    padding: 10px 20px;
    color: white;
    background-color: rgb(0, 202, 135);
    }
    .tabs {
        margin: 30px 0;
    }
    .tabs li {
        width: 50%;
        padding: 0;    
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }

</style>


