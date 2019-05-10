<template>
  <div>
	<!-- 문제 3 -->
	<!-- '<p>hello vue</p>' 를 기본 템플릿으로 갖는 로컬 컴포넌트를 한개 등록해보세요 -->
	<p >hello vue</p>
	<div v-on:click="change">{{ num }}</div>

	<!-- 문제 4 -->
	<!-- 문제 3에서 등록한 컴포넌트에 아래의 num 데이터를 전달해보세요 -->

	<!-- 문제 5 -->
	<!-- 문제 3에서 등록한 컴포넌트에서 이벤트를 발생시켜 num 데이터의 값을 변경해보세요 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      num: 10,
    }
  },
	methods: {
		change: function() {
			this.num++;
		}
	}
}

</script>

<style>

</style>
