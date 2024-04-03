<script setup>
const props = defineProps({
    label: { type: String, default: "Label" },
    type: { type: String, default: "text" }
});

const model = defineModel();

const { label, type } = props;
</script>

<template>
    <div>
            <v-text-field :type="type" v-model="model" :label="label" variant="outlined"></v-text-field>
    </div>
</template>