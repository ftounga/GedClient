var app = angular.module("GEDapp", ["ngRoute","ui.bootstrap","controllerMetadonnee","controllerMetadonneeDescribe","viewService",
	                                "nouvelEntry","clone","documentService","adminUserService","controllerUser",
	                                "controllerProfil","controllerGroup","controllerTypeDossier","controllerTypeDocument",
	                                "controllerDocument","controllerDossier","controllerEdit",
	                                 "newDossier","newDocument","angularUtils.directives.dirPagination","viewDossierService",
	                                 "viewDossier","cloneDir","cloneDoc","viewModule","newTypeModule","selectModule"]);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: 'scripts/views/main.html',
		controller: 'mainCtrl'			
	})
	.when('/titre1',{
		templateUrl: 'scripts/views/page1.html',
		controller: 'titre1Ctrl'
	})
	.when('/titre2',{
		templateUrl: 'scripts/views/page2.html',
		controller: 'titre2Ctrl'
	})
	.when('/titre3',{
		templateUrl: 'scripts/views/page3.html',
		controller: 'titre3Ctrl'
	})
	.when('/menu1',{
		templateUrl: 'scripts/views/page.html',
		controller: 'titre3Ctrl'
	})
	.when('/home',{
		templateUrl: 'scripts/views/page3.html',
		controller: 'titre3Ctrl'
	})
	.when('/typeMetadonnee',{
		templateUrl: 'scripts/views/metadonneeViews/typeMetadonnee.html',
		controller: 'TypeMetadonneeCtrl'
	})
	.when('/typeDossier',{
		templateUrl: 'scripts/views/typeDossierViews/typeDossier.html',
		controller: 'TypeDossierCtrl'
	})
	.when('/typeDocument',{
		templateUrl: 'scripts/views/typeDocumentViews/typeDocument.html',
		controller: 'TypeDocumentCtrl'
	})
	.when('/describe',{
		templateUrl: 'scripts/views/metaDonnee.html',
		controller: 'MetadonneeDescribeCtrl'
	})
	.when('/nouvelEntry',{
		templateUrl: 'scripts/views/nouvelEntry.html',
		controller: 'NouvelEntryCtrl'
	})
	.when('/cloneMTD/:dataId/:dataName/:dataType',{
		templateUrl: 'scripts/views/clone.html',
		controller: 'CloneCtrl'
	})
	.when('/clone/:dataId/:dataName/:dataType',{
		templateUrl: 'scripts/views/clone.html',
		controller: 'CloneCtrl'
	})
	.when('/cloneDir/:dataId/:dataNom/:dataStatut/:dataOwner/:dataDateModif/:dataDateCre/:dataUserCre/:dataUserModif',{
		templateUrl: 'scripts/views/dossierViews/cloneDir.html',
		controller: 'CloneDirCtrl'
	})
	.when('/cloneDoc/:dataId/:dataNom/:dataStatut/:dataOwner/:dataDateModif/:dataDateCre/:dataUserCre/:dataUserModif',{
		templateUrl: 'scripts/views/documentViews/cloneDoc.html',
		controller: 'CloneDocCtrl'
	})
	.when('/edit/:dataId/:dataName/:dataType',{
		templateUrl: 'scripts/views/edit.html',
		controller: 'EditCtrl'
	})
	.when('/groupe',{
		templateUrl: 'scripts/views/groupe.html',
		controller: 'GroupCtrl'
	})
	.when('/user',{
		templateUrl: 'scripts/views/user.html',
		controller: 'UserCtrl'
	})
	.when('/profil',{
		templateUrl: 'scripts/views/profil.html',
		controller: 'ProfilCtrl'
	})
	.when('/document',{
		templateUrl: 'scripts/views/documentViews/document.html',
		controller: 'DocumentCtrl'
	})
	.when('/dossier',{
		templateUrl: 'scripts/views/dossierViews/dossier.html',
		controller: 'DossierCtrl'
	})
	.when('/dossier1',{
		templateUrl: 'scripts/views/dossierTest.html',
		controller: 'Dossier'
	})
	.when('/newDossier',{
		templateUrl: 'scripts/views/dossierViews/newDossier.html',
		controller: 'NewDossierCtrl'
	})
	.when('/newDocument',{
		templateUrl: 'scripts/views/documentViews/newDocument.html',
		controller: 'NewDocumentCtrl'
	})
	.when('/viewDocument',{
		templateUrl: 'scripts/views/documentViews/viewDocument.html',
		controller: 'ViewDocumentCtrl'
	})
	.when('/viewDossier',{
		templateUrl: 'scripts/views/dossierViews/viewDossier.html',
		controller: 'ViewDossierCtrl'
	})
	.when('/newTypeDocument',{
		templateUrl: 'scripts/views/typeDocumentViews/newTypeDocument.html',
		controller: 'NewTypeDocumentCtrl'
	})
	.when('/newTypeDossier',{
		templateUrl: 'scripts/views/typeDossierViews/newTypeDossier.html',
		controller: 'NewTypeDossierCtrl'
	})
	.when('/newTypeMetadonnee',{
		templateUrl: 'scripts/views/metadonneeViews/newTypeMetadonnee.html',
		controller: 'NewTypeMetadonneeCtrl'
	})
	.when('/viewTypeDossier',{
		templateUrl: 'scripts/views/dossierViews/viewTypeDossier.html',
		controller: 'ViewTypeDossierCtrl'
	})
	.when('/viewTypeDocument',{
		templateUrl: 'scripts/views/documentViews/viewTypeDocument.html',
		controller: 'ViewTypeDocumentCtrl'
	})
	.when('/viewTypeMetadonnee',{
		templateUrl: 'scripts/views/metadonneeViews/viewTypeMetadonnee.html',
		controller: 'ViewTypeMetadonneeCtrl'
	})
	.otherwise({
        redirectTo: '/'
      });

}]);

