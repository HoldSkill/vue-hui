<template>
    <div class="cov-vue-date">
        <div class="datepickbox">
            <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="option.placeholder" v-model="date.time" :required="required" @click="showCheck" @foucus="showCheck" :style="option.inputStyle ? option.inputStyle : {}" />
        </div>
        <div class="datepicker-overlay" v-if="showInfo.check" @click="dismiss($event)" v-bind:style="{'background' : option.overlayOpacity? 'rgba(0,0,0,'+option.overlayOpacity+')' : 'rgba(0,0,0,0.5)'}">
            <div class="cov-date-body" :style="{'background-color': option.color ? option.color.header : '#3f51b5'}">
                <div class="cov-date-monthly">
                    <div class="cov-date-previous" @click="nextMonth('pre')">«</div>
                    <div class="cov-date-caption" :style="{'color': option.color ? option.color.headerText : '#fff'}">
                        <span @click="showYear"><small>{{checked.year}}</small></span>
                        <br>
                        <span @click="showMonth">{{displayInfo.month}}</span>
                    </div>
                    <div class="cov-date-next" @click="nextMonth('next')">»</div>
                </div>
                <div class="cov-date-box" v-if="showInfo.day">
                    <div class="cov-picker-box">
                        <div class="week">
                            <ul>
                                <li v-for="weekie in library.week">{{weekie}}</li>
                            </ul>
                        </div>
                        <div class="day" v-for="day in dayList" track-by="$index" @click="checkDay(day)" :class="{'checked':day.checked,'unavailable':day.unavailable,'passive-day': !(day.inMonth)}" :style="day.checked ? (option.color && option.color.checkedDay ? { background: option.color.checkedDay } : { background: '#F50057' }) : {}">{{day.value}}</div>
                    </div>
                </div>
                <div class="cov-date-box list-box" v-if="showInfo.year">
                    <div class="cov-picker-box date-list" id="yearList">
                        <div class="date-item" v-for="yearItem in library.year" track-by="$index" @click="setYear(yearItem)">{{yearItem}}</div>
                    </div>
                </div>
                <div class="cov-date-box list-box" v-if="showInfo.month">
                    <div class="cov-picker-box date-list">
                        <div class="date-item" v-for="monthItem in library.month" track-by="$index" @click="setMonth(monthItem)">{{monthItem}}</div>
                    </div>
                </div>
                <div class="cov-date-box list-box" v-if="showInfo.hour">
                    <div class="cov-picker-box date-list">
                        <div class="watch-box">
                            <div class="hour-box">
                                <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
                                <ul>
                                    <li class="hour-item" v-for="hitem in hours" @click="setTime('hour', hitem, hours)" :class="{'active':hitem.checked, 'disabled': hitem.disabled}">{{hitem.value}}</li>
                                </ul>
                            </div>
                            <div class="min-box">
                                <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
                                <div class="min-item" v-for="mitem in mins" @click="setTime('min',mitem, mins)" :class="{'active':mitem.checked, 'disabled': mitem.disabled}">{{mitem.value}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-box">
                    <span @click="showInfo.check=false">{{option.buttons? option.buttons.cancel : 'Cancel' }}</span>
                    <span @click="picked">{{option.buttons? option.buttons.ok : 'Ok'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

exports.default = {
    name: 'hui-datepicker',
    props: {
        required: false,
        date: {
            type: Object,
            required: true
        },
        option: {
            type: Object,
            default: function _default() {
                return {
                    type: 'day',
                    SundayFirst: false,
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD',
                    color: {
                        checked: '#F50057',
                        header: '#3f51b5',
                        headerText: '#fff'
                    },
                    inputStyle: {
                        'display': 'inline-block',
                        'padding': '6px',
                        'line-height': '22px',
                        'font-size': '16px',
                        'border': '2px solid #fff',
                        'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
                        'border-radius': '2px',
                        'color': '#5F5F5F'
                    },
                    placeholder: 'when?',
                    buttons: {
                        ok: 'OK',
                        cancel: 'Cancel'
                    },
                    overlayOpacity: 0.5,
                    dismissible: true
                };
            }
        },
        limit: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        function hours() {
            var list = [];
            var hour = 24;
            while (hour > 0) {
                hour--;
                list.push({
                    checked: false,
                    value: hour < 10 ? '0' + hour : hour
                });
            }
            return list;
        }

        function mins() {
            var list = [];
            var min = 60;
            while (min > 0) {
                min--;
                list.push({
                    checked: false,
                    value: min < 10 ? '0' + min : min
                });
            }
            return list;
        }
        return {
            hours: hours(),
            mins: mins(),
            showInfo: {
                hour: false,
                day: false,
                month: false,
                year: false,
                check: false
            },
            displayInfo: {
                month: ''
            },
            library: {
                week: this.option.week,
                month: this.option.month,
                year: []
            },
            checked: {
                oldtime: '',
                currentMoment: null,
                year: '',
                month: '',
                day: '',
                hour: '',
                min: ''
            },
            dayList: [],
            selectedDays: []
        };
    },

    methods: {
        nowTime: function() {
            var today = new Date();
            var formatNumber = function(n) {
                return n < 10 ? "0" + n : n;
            };
            var now = [today.getFullYear(), formatNumber(today.getMonth() + 1), formatNumber(today.getDate()), formatNumber(today.getHours()), formatNumber(today.getMinutes())];
            return now;
        },
        pad: function pad(n) {
            n = Math.floor(n);
            return n < 10 ? '0' + n : n;
        },
        nextMonth: function nextMonth(type) {
            var next = null;
            type === 'next' ? next = (0, _moment2.default)(this.checked.currentMoment).add(1, 'M') : next = (0, _moment2.default)(this.checked.currentMoment).add(-1, 'M');
            this.showDay(next);
        },
        showDay: function showDay(time) {
            if (time === undefined || !Date.parse(time)) {
                this.checked.currentMoment = (0, _moment2.default)();
            } else {
                this.checked.currentMoment = (0, _moment2.default)(time, this.option.format);
            }
            this.showOne('day');
            this.checked.year = (0, _moment2.default)(this.checked.currentMoment).format('YYYY');
            this.checked.month = (0, _moment2.default)(this.checked.currentMoment).format('MM');
            this.checked.day = (0, _moment2.default)(this.checked.currentMoment).format('DD');
            this.checked.hour = (0, _moment2.default)(this.checked.currentMoment).format('HH');
            this.checked.min = (0, _moment2.default)(this.checked.currentMoment).format('mm');
            this.displayInfo.month = this.library.month[(0, _moment2.default)(this.checked.currentMoment).month()];
            var days = [];
            var currentMoment = this.checked.currentMoment;
            var firstDay = (0, _moment2.default)(currentMoment).date(1).day();
            // gettting previous and next month
            // let currentMonth = moment(currentMoment)
            var previousMonth = (0, _moment2.default)(currentMoment);
            var nextMonth = (0, _moment2.default)(currentMoment);
            nextMonth.add(1, 'months');
            previousMonth.subtract(1, 'months');
            var monthDays = (0, _moment2.default)(currentMoment).daysInMonth();
            var oldtime = this.checked.oldtime;
            for (var i = 1; i <= monthDays; ++i) {
                days.push({
                    value: i,
                    inMonth: true,
                    unavailable: false,
                    checked: false,
                    moment: (0, _moment2.default)(currentMoment).date(i)
                });
                if (i === Math.ceil((0, _moment2.default)(currentMoment).format('D')) && (0, _moment2.default)(oldtime, this.option.format).year() === (0, _moment2.default)(currentMoment).year() && (0, _moment2.default)(oldtime, this.option.format).month() === (0, _moment2.default)(currentMoment).month()) {
                    days[i - 1].checked = true;
                }
                this.checkBySelectDays(i, days);
            }
            if (firstDay === 0) firstDay = 7;
            for (var _i = 0; _i < firstDay - (this.option.SundayFirst ? 0 : 1); _i++) {
                var passiveDay = {
                    value: previousMonth.daysInMonth() - _i,
                    inMonth: false,
                    action: 'previous',
                    unavailable: false,
                    checked: false,
                    moment: (0, _moment2.default)(currentMoment).date(1).subtract(_i + 1, 'days')
                };
                days.unshift(passiveDay);
            }
            if (this.limit.length > 0) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.limit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var li = _step.value;

                        switch (li.type) {
                            case 'fromto':
                                days = this.limitFromTo(li, days);
                                break;
                            case 'weekday':
                                days = this.limitWeekDay(li, days);
                                break;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            var passiveDaysAtFinal = 42 - days.length;
            for (var _i2 = 1; _i2 <= passiveDaysAtFinal; _i2++) {
                var _passiveDay = {
                    value: _i2,
                    inMonth: false,
                    action: 'next',
                    unavailable: false,
                    checked: false,
                    moment: (0, _moment2.default)(currentMoment).add(1, 'months').date(_i2)
                };
                days.push(_passiveDay);
            }
            this.dayList = days;
        },
        checkBySelectDays: function checkBySelectDays(d, days) {
            var _this = this;

            this.selectedDays.forEach(function(day) {
                if (_this.checked.year === (0, _moment2.default)(day).format('YYYY') && _this.checked.month === (0, _moment2.default)(day).format('MM') && d === Math.ceil((0, _moment2.default)(day).format('D'))) {
                    days[d - 1].checked = true;
                }
            });
        },
        limitWeekDay: function limitWeekDay(limit, days) {
            days.map(function(day) {
                if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
                    day.unavailable = true;
                }
            });
            return days;
        },
        limitFromTo: function limitFromTo(limit, days) {
            var _this2 = this;

            if (limit.from || limit.to) {
                days.map(function(day) {
                    if (_this2.getLimitCondition(limit, day)) {
                        day.unavailable = true;
                    }
                });
            }
            return days;
        },
        getLimitCondition: function getLimitCondition(limit, day) {
            var tmpMoment = (0, _moment2.default)(this.checked.year + '-' + this.pad(this.checked.month) + '-' + this.pad(Number(day.value)));
            var limitFromDay = (0, _moment2.default)(limit.from, "YYYY-MM-DD");
            if (limit.from && !limit.to) {
                return !tmpMoment.isSame(limitFromDay) && !tmpMoment.isAfter(limit.from);
            } else if (!limit.from && limit.to) {
                return !tmpMoment.isBefore(limit.to);
            } else {
                return !tmpMoment.isBetween(limit.from, limit.to);
            }
        },
        checkDay: function checkDay(obj) {
            if (obj.unavailable || obj.value === '') {
                return false;
            }
            if (!obj.inMonth) {
                this.nextMonth(obj.action);
            }
            if (this.option.type === 'day' || this.option.type === 'min') {
                this.dayList.forEach(function(x) {
                    x.checked = false;
                });
                this.checked.day = this.pad(obj.value);
                obj.checked = true;
            } else {
                var day = this.pad(obj.value);
                var ctime = this.checked.year + '-' + this.checked.month + '-' + day;
                if (obj.checked === true) {
                    obj.checked = false;
                    this.selectedDays.$remove(ctime);
                } else {
                    this.selectedDays.push(ctime);
                    obj.checked = true;
                }
            }
            switch (this.option.type) {
                case 'day':
                    this.picked();
                    break;
                case 'min':
                    this.showOne('hour');
                    // shift activated time items to visible position.
                    this.shiftActTime();
                    break;
            }
        },
        showYear: function showYear() {
            var _this3 = this;

            var year = (0, _moment2.default)(this.checked.currentMoment).year();
            this.library.year = [];
            var yearTmp = [];
            for (var i = year - 100; i < year + 5; ++i) {
                yearTmp.push(i);
            }
            this.library.year = yearTmp;
            this.showOne('year');
            this.$nextTick(function() {
                var listDom = document.getElementById('yearList');
                listDom.scrollTop = listDom.scrollHeight - 100;
                _this3.addYear();
            });
        },
        showOne: function showOne(type) {
            var thisDatePicker = this;
            var nowTime = this.nowTime();
            switch (type) {
                case 'year':
                    this.showInfo.hour = false;
                    this.showInfo.day = false;
                    this.showInfo.year = true;
                    this.showInfo.month = false;
                    break;
                case 'month':
                    this.showInfo.hour = false;
                    this.showInfo.day = false;
                    this.showInfo.year = false;
                    this.showInfo.month = true;
                    break;
                case 'day':
                    this.showInfo.hour = false;
                    this.showInfo.day = true;
                    this.showInfo.year = false;
                    this.showInfo.month = false;
                    break;
                case 'hour':
                    this.showInfo.hour = true;
                    this.showInfo.day = false;
                    this.showInfo.year = false;
                    this.showInfo.month = false;
                    if (thisDatePicker.checked.year == nowTime[0] && thisDatePicker.checked.month == nowTime[1] && thisDatePicker.checked.day == nowTime[2]) {
                        function hours() {
                            var list = [];
                            var hour = 24;
                            while (hour > 0) {
                                hour--;
                                if (hour >= nowTime[3]) {
                                    list.push({
                                        disabled: false,
                                        checked: false,
                                        value: hour < 10 ? '0' + hour : hour
                                    });
                                } else {
                                    list.push({
                                        disabled: true,
                                        checked: false,
                                        value: hour < 10 ? '0' + hour : hour
                                    });
                                }
                            }
                            return list;
                        }
                        thisDatePicker.hours = hours();
                    } else {
                        function hours() {
                            var list = [];
                            var hour = 24;
                            while (hour > 0) {
                                hour--;
                                list.push({
                                    disabled: false,
                                    checked: false,
                                    value: hour < 10 ? '0' + hour : hour
                                });
                            }
                            return list;
                        }
                        thisDatePicker.hours = hours();
                    }
                    break;
                default:
                    this.showInfo.day = true;
                    this.showInfo.year = false;
                    this.showInfo.month = false;
                    this.showInfo.hour = false;
            }
        },
        showMonth: function showMonth() {
            this.showOne('month');
        },
        addYear: function addYear() {
            var _this4 = this;

            var listDom = document.getElementById('yearList');
            listDom.addEventListener('scroll', function(e) {
                if (listDom.scrollTop < listDom.scrollHeight - 100) {
                    var len = _this4.library.year.length;
                    var lastYear = _this4.library.year[len - 1];
                    _this4.library.year.push(lastYear + 1);
                }
            }, false);
        },
        setYear: function setYear(year) {
            this.checked.currentMoment = (0, _moment2.default)(year + '-' + this.checked.month + '-' + this.checked.day);
            this.showDay(this.checked.currentMoment);
        },
        setMonth: function setMonth(month) {
            var mo = this.library.month.indexOf(month) + 1;
            if (mo < 10) {
                mo = '0' + '' + mo;
            }
            this.checked.currentMoment = (0, _moment2.default)(this.checked.year + '-' + mo + '-' + this.checked.day);
            this.showDay(this.checked.currentMoment);
        },
        showCheck: function showCheck() {
            if (this.date.time === '') {
                this.showDay();
            } else {
                if (this.option.type === 'day' || this.option.type === 'min') {
                    this.checked.oldtime = this.date.time;
                    this.showDay(this.date.time);
                } else {
                    this.selectedDays = JSON.parse(this.date.time);
                    if (this.selectedDays.length) {
                        this.checked.oldtime = this.selectedDays[0];
                        this.showDay(this.selectedDays[0]);
                    } else {
                        this.showDay();
                    }
                }
            }
            this.showInfo.check = true;
        },
        setTime: function setTime(type, obj, list) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    item.checked = false;
                    if (this.checked.year == this.nowTime()[0] && this.checked.month == this.nowTime()[1] && this.checked.day == this.nowTime()[2]) {
                        console.log('今天');
                        if ((type == 'hour') && (item.value === obj.value) && (obj.value >= this.nowTime()[3])) {
                            item.checked = true;
                            this.checked[type] = item.value;
                            var thisDatePicker = this;

                            function mins() {
                                var list = [];
                                var min = 60;
                                while (min > 0) {
                                    min--;
                                    if (obj.value == thisDatePicker.nowTime()[3]) {
                                        if (min > thisDatePicker.nowTime()[4]) {
                                            list.push({
                                                disabled: false,
                                                checked: false,
                                                value: min < 10 ? '0' + min : min
                                            });
                                        } else {
                                            list.push({
                                                disabled: true,
                                                checked: false,
                                                value: min < 10 ? '0' + min : min
                                            });
                                        }
                                    } else if (obj.value > thisDatePicker.nowTime()[3]) {
                                        list.push({
                                            disabled: false,
                                            checked: false,
                                            value: min < 10 ? '0' + min : min
                                        });
                                    }

                                }
                                return list;
                            }
                            thisDatePicker.mins = mins();
                        }
                        if ((type == 'min') && (this.checked.hour <= this.nowTime()[3])) {
                            if ((item.value === obj.value) && (obj.value > this.nowTime()[4])) {
                                item.checked = true;
                                this.checked[type] = item.value;
                            }
                        } else if ((type == 'min') && item.value === obj.value) {
                            item.checked = true;
                            this.checked[type] = item.value;
                        }
                    } else {
                        if (item.value === obj.value) {
                            if (type == 'hour') {
                                var thisDatePicker = this;

                                function mins() {
                                    var list = [];
                                    var min = 60;
                                    while (min > 0) {
                                        min--;
                                        list.push({
                                            disabled: false,
                                            checked: false,
                                            value: min < 10 ? '0' + min : min
                                        });

                                    }
                                    return list;
                                }
                                thisDatePicker.mins = mins();
                            }
                            item.checked = true;
                            this.checked[type] = item.value;

                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        },
        picked: function picked() {
            if (this.option.type === 'day' || this.option.type === 'min') {
                var ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour + ':' + this.checked.min;
                this.checked.currentMoment = (0, _moment2.default)(ctime, 'YYYY-MM-DD HH:mm');
                this.date.time = (0, _moment2.default)(this.checked.currentMoment).format(this.option.format);
            } else {
                this.date.time = JSON.stringify(this.selectedDays);
            }
            this.showInfo.check = false;
            this.$emit('change', this.date.time);
        },
        dismiss: function dismiss(evt) {
            if (evt.target.className === 'datepicker-overlay') {
                if (this.option.dismissible === undefined || this.option.dismissible) {
                    this.showInfo.check = false;
                    this.$emit('cancel');
                }
            }
        },
        shiftActTime: function shiftActTime() {
            // shift activated time items to visible position.
            this.$nextTick(function() {
                if (!document.querySelector('.hour-item.active')) {
                    return false;
                }
                document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop || 0) - 250;
                document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) - 250;
            });
        }
    }
};
</script>
<style lang="less">
    @import "../../../styles/components/datepicker.less";
</style>
