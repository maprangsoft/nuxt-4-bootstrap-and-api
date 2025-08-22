<script lang="ts" setup>
const form = reactive({
    name: '',
})
async function onSubmit() {

    const {data,error} = await useFetch('/api/products/create', {
        method: 'POST',
        body: form
    })
    if(error.value) {
        console.log(error.value)
        return
    }
    console.log(data.value)

    alert('create product success')

}

</script>

<template>
    <div>

<form @submit.prevent="onSubmit">
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" v-model="form.name" required>
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
</template>

<style lang="scss" scoped></style>