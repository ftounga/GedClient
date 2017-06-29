angular.module('adminUserService', [])
    .service('AdminUserService', function () {

    	var self = this;

        this.myGroupes = [
			{ id:'0', groupName:'groupe 1'},
        	{ id:'1', groupName:'groupe 2'},
        	{ id:'2', groupName:'groupe 3' },
        	{ id:'3', groupName:'groupe 4' }
		];

		this.myUsers = [
			{ id:'0', userName: 'user 1'},
			{ id:'1', userName: 'user 2'},
			{ id:'2', userName: 'user 3'},
			{ id:'3', userName: 'user 4'}
		];

		this.myProfils = [
			{id:'0', profilName:'profil 1'},
			{id:'1', profilName:'profil 2'},
			{id:'2', profilName:'profil 3'},
			{id:'3', profilName:'profil 4'}
		];

		this.getGroup = function(){
			return self.myGroupes;
		};

		this.getUser = function(){
			return self.myUsers;
		};

		this.getProfil = function(){
			return self.myProfils;
		};


    });