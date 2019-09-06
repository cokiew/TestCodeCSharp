$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


const zz = new Vue({
	el: '#classuser',
	
	created: function(){
		this.getTotalsUser();
		this.getTopWinners();
		this.getBottomPlayers();
		this.getRecentlyActivePlayers();
		this.getHiscores();
	},

	data: {
			messagedata : '',
			users: [],
			users2: [],
			users3: [],
			users4: []
	},

	methods: {

		getTotalsUser : function() {

			axios.get('http://201.139.98.110:8785/api/Manager/Total_Users').then(response =>{
				this.messagedata = response.data
			}).catch(function (error) {
				if (error.response){
				  console.log("Response",  error.response.headers);
				} 
				else if (error.request) {
			      console.log(error.request);
				} 
				else {
				  console.log(error.message);
				}
			console.log(error.config);
		});
		},
		getTopWinners: function(){
			axios.get('http://201.139.98.110:8785/api/Manager/Top_Winners').then(response =>{
				this.users = response.data
			}).catch(function (error) {
				if (error.response) {
				  console.log(error.response.headers);
				} 
				else if (error.request) {
			      console.log(error.request);
				} 
				else {
				  console.log(error.message);
				}
			console.log(error.config);
		});
		},
		getBottomPlayers: function(){
			axios.get('http://201.139.98.110:8785/api/Manager/Bottom_Players').then(response =>{
				this.users2 = response.data
			}).catch(function (error) {
				if (error.response) {
				  console.log(error.response.headers);
				} 
				else if (error.request) {
			      console.log(error.request);
				} 
				else {
				  console.log(error.message);
				}
			console.log(error.config);
		});
		},
		getRecentlyActivePlayers: function(){
			axios.get('http://201.139.98.110:8785/api/Manager/Most_Recently_Active_Players').then(response =>{
				this.users3 = response.data
			}).catch(function (error) {
				if (error.response) {
				  console.log(error.response.headers);
				} 
				else if (error.request) {
			      console.log(error.request);
				} 
				else {
				  console.log(error.message);
				}
			console.log(error.config);
		});
		},
		getHiscores : function() {

			axios.get('http://201.139.98.110:8785/api/Manager/Hiscores').then(response =>{
				this.users4 = response.data
			}).catch(function (error) {
				if (error.response) {
				  console.log(error.response.headers);
				} 
				else if (error.request) {
			      console.log(error.request);
				} 
				else {
				  console.log(error.message);
				}
			console.log(error.config);
		});
		}	
	}
})

