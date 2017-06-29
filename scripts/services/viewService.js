angular.module('viewService', [])
    .service('ViewService', function ($http) {

    	var self = this;
    	
    	this.users = [];
    	
    	this.getUsers = function(){
    		
    		var promise = $http.get("/typeDossiers").success(function(response){ 
    			self.users = response;  //ajax request to fetch data into $scope.data
                return self.users;
            });
    		
    		return promise;    
		};
			

        this.myDatas = [
			{ filterName: 'filtre 0', request : '0'},
        	{ filterName: 'filtre 1', request : '1'},
        	{ filterName: 'filtre 2', request : '2' },
        	{ filterName: 'filtre 3', request : '3' }
		];

		this.myTable = [
			{id:0, name:'categorie',type:'texte'},
			{id:1, name:'sous-categorie',type:'texte'},
			{id:2, name:'nom',type:'texte'},
			{id:3, name:'prénom',type:'texte'}
		];

		this.propertie = {};

		this.getPropertie = function(){
			return self.propertie;
		};

		this.setPropertie = function(prop){
			self.propertie = self.myTable[prop];
		};

		this.removeElement = function(myTab,index){
			console.log("on est good");

			var tab = myTab;

			for (var i = 0; i < tab.length; i++) {
				if (tab[i].id != index.id){
					tab.push(index);
				}
			};
		};

		this.typeMetas = [];
		this.typeDocs = [];
		this.typeDos = [];
		this.status = [{nom:"complet"},{nom:"incomplet"}];


    });