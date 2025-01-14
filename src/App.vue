<template>
	<el-text>Hello!</el-text>
	<HelloWorld msg="我是HelloWorld组件"></HelloWorld>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { useFetch, useAxios } from './utils/useRequest'

const test = async () => {
	let fetchRes = await useFetch('http://jsonplaceholder.typicode.com/posts', 5000)
	console.log(fetchRes)

	let axiosRes = await useAxios({
		url: 'http://jsonplaceholder.typicode.com/posts',
		timeout: 5000
	})
	console.log(axiosRes)
}
test()




</script>

<style scoped>
</style>
