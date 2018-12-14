<template>
	<div>
	    <header class="header">
	      <div class="header__sitetitle">
	        <img src="../assets/logo.png">
	        <p>Bangkok Dinner Adviser</p>
	      </div>
	    </header>

		<div class="p-result">

			<div class="main-title">
			<h2>今夜のご飯候補</h2>
			</div>

			<div class="p-result__search-setting">
				<div class="search-setting">
					<p class="search-setting__title">ジャンル：<span v-if="$route.query.category">{{$route.query.category}}</span><span v-else>-</span></p>
					<p class="search-setting__title">最寄り駅：<span v-if="$route.query.station">{{$route.query.station}}</span><span v-else>-</span></p>
					<p class="search-setting__title">価格帯：<span v-if="$route.query.price">{{$route.query.price}}</span><span v-else>-</span></p>
				</div>
			</div>

			<div class="p-result__shops">
				<div class="shop-item" v-for="(result, i) in results" v-if="i < 10">
					<router-link :to="'/detail/' + result.ID"><h4 class="shop-item__title">{{result.店舗名}}</h4></router-link>  
					<p>ここはとっても美味しいお店です。</p>
				</div>
				<!--div class="shop-item">
					<h4 class="shop-item__title">店名BBBBBBBBBBBBBB</h4>
					<p>ここはとっても美味しいお店です。</p>
				</div>
				<div class="shop-item">
					<h4 class="shop-item__title">店名CCCCCCCCCCCCCC</h4>
					<p>ここはとっても美味しいお店です。</p>
				</div>
				<div class="shop-item">
					<h4 class="shop-item__title">店名DDDDDDDDDDDDDD</h4>
					<p>ここはとっても美味しいお店です。</p>
				</div-->
			</div>

			<div class="p-result__btn">
				<router-link class="btn" to="/">もう一度探す</router-link>  
			</div>
		</div>
		<div class="footer">© 2018 Bangkok Dinner Adviser</div>
	</div>
</template>

<script>
import restaurants from '../data/restaurants'

export default {
	data () {
		return {
			results: []
		}
	},

	created () {
		const query = this.$route.query
		const filteredResults = restaurants.filter((restaurant) => {
			if (query.category) {
				return restaurant['カテゴリ'] === query.category
			} else {
				return true
			}
		})
		this.results = this.shuffle(filteredResults)
	},

	methods: {
		shuffle (array) {
			for(var i = array.length - 1; i > 0; i--){
			    var r = Math.floor(Math.random() * (i + 1));
			    var tmp = array[i];
			    array[i] = array[r];
			    array[r] = tmp;
			}
			return array
		}
	}
}
</script>