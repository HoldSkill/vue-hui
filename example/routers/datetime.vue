<template>
    <hui-layout title="DateTime">

        <hui-cell-group title="常规" class="demo-small-pitch">
            <hui-cell-item arrow>
                <span slot="left">Time：</span>
                <hui-datetime type="time" v-model="datetime1" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">Day：</span>
                <hui-datetime type="day" v-model="datetime2" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">Month：</span>
                <hui-datetime type="month" v-model="datetime3" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">Date：</span>
                <hui-datetime type="date" v-model="datetime4" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">DateTime：</span>
                <hui-datetime type="datetime" v-model="datetime5" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">自定义模板：</span>
                <hui-datetime type="date" :yearFormat="yearFormat" :monthFormat="monthFormat" :dayFormat="dayFormat" v-model="datetime6" slot="right"></hui-datetime>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="可选时间" class="demo-small-pitch">
            <hui-cell-item arrow>
                <span slot="left">开始/结束年份：</span>
                <hui-datetime startYear="1990" endYear="2020" type="date" v-model="datetime7" slot="right"></hui-datetime>
            </hui-cell-item>
            <hui-cell-item arrow>
                <span slot="left">开始/结束小时：</span>
                <hui-datetime startHour="9" endHour="18" type="time" v-model="datetime8" slot="right"></hui-datetime>
            </hui-cell-item>
        </hui-cell-group>

        <hui-cell-group title="限制时间" class="demo-small-pitch">
            <hui-cell-item arrow>
                <span slot="left">时间段范围：</span>
                <hui-datetime ref="datetime" startDate="2012-03-16 15:13" endDate="2019-10-21 22:21" v-model="datetime9" slot="right"></hui-datetime>
            </hui-cell-item>
            <p slot="bottom" class="demo-cell-bottom-tip">( 2012-03-16 15:13 ~ 2019-10-21 22:21 )</p>
        </hui-cell-group>

        <hui-button-group>
            <hui-button size="large" @click.native="open">手动打开</hui-button>
        </hui-button-group>
    </hui-layout>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                datetime1: '12:18',
                datetime2: '2018-03-29',
                datetime3: '2018-03-29',
                datetime4: '2018-03-29',
                datetime5: '2016-06-06 06:06',
                datetime6: '2017-05-11',
                datetime7: '',
                datetime8: '10:20',
                datetime9: '',
                yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
                monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
                dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
            }
        },
        methods: {
            open() {
                this.$refs.datetime.open();
            }
        }
    }
</script>
