<template>
    <button :disabled="disabled" :class="classes" :style="{backgroundColor: bgcolor, color: color}" :type="actionType">
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    import {isColor} from '../../../utils/assist';

    export default {
        name: 'hui-button',
        props: {
            disabled: Boolean,
            actionType: {
                validator(value) {
                    return ['button', 'submit', 'reset'].indexOf(value) > -1;
                },
                default: 'button'
            },
            type: {
                validator(value) {
                    return ['primary', 'danger', 'warning', 'hollow', 'disabled'].indexOf(value) > -1;
                },
                default: 'primary'
            },
            size: {
                validator(value) {
                    return ['small', 'large'].indexOf(value) > -1;
                }
            },
            bgcolor: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            },
            color: {
                validator(value) {
                    if(!value) return true;
                    return isColor(value);
                }
            },
            shape: {
                validator(value) {
                    return ['square', 'circle'].indexOf(value) > -1;
                },
                default: 'square'
            }
        },
        computed: {
            classes() {
                let s = this.size === 'large' ? 'hui-btn-block' : 'hui-btn';
                let b = 'hui-btn-' + this.type;
                if (this.disabled) {
                    b = 'hui-btn-disabled';
                }

                if (this.bgcolor) {
                    b = '';
                }
                return s + ' ' + b + (this.shape === 'circle' ? ' hui-btn-circle' : '');
            }
        }
    }
</script>

<style lang="less">
    @import '../../../styles/components/button.less';
</style>
