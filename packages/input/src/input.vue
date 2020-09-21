<template>
    <div 
    :class="[
    type === 'textarea' ? 'chj-textarea' : 'chj-input',
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    >
        <template v-if="type !== 'textarea'">
            <input class="chj-input__inner"
                    :value="nativeInputValue"
                    @input="handleInput"
                    ref="input"
                    v-bind="$attrs">
        </template>
        <textarea v-else></textarea>
    </div>
</template>
<script>
export default {
    name: 'ChjInput',
    componentName: 'ChjInput',

    props: {
        type: {
            type: String,
            default: 'input'
        },
        value: [String, Number],
        showWordLimit: {
            type: Boolean,
            default: false
        }
    },
    created() {
        console.log(this.$attrs)
    },
    computed: {
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value);
        }
    },
    methods: {
        setNativeInputValue() {
            const input = this.getInput();
            if (!input) return;
            if (input.value === this.value) return;
            input.value = this.value;
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea;
        },
        handleInput(event) {
            this.$emit('input', event.target.value);

            // this.setNativeInputValue()
        }
    }
}
</script>