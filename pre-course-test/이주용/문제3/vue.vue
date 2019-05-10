<template>
  <div>
    <!-- 문제 1 -->
    <!-- 아래 버튼을 클릭했을 때 브라우저 기본 경고창을 띄워보세요 -->
    <button v-on:click="warring">click me</button>

    <!-- 문제 2 -->
    <!-- 뷰 데이터 속성인 login 값에 따라 아래 태그가 표시되거나 미표시되게 해보세요.  -->
    <p v-show="login">user has been logged in</p>
    
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
		warring: function() {
			alert("에러");
		}
	},	
}

</script>

<style>

</style>
