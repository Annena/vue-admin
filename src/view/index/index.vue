<template>
	<div>
		欢迎来到人员管理系统
		<!-- 注意命名，驼峰法定义的组件FooterNav需在使用时用短横线连接<footer-nav> -->
		<footer-nav v-bind:class="{'isIndex':'isNowPage'}"></footer-nav>
	</div>
</template>
<script type="text/javascript">
	import FooterNav from "../../components/footer.vue"
	//引入FooterNav这个组件
	export default{
		components:{
			FooterNav
		},
	data(){
		return{
			isNowPage:true
		}
	}
}
	//局部注册 注意写在export default内部，components:{FooterNav}
</script>